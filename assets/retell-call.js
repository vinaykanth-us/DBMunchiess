/* ==========================================
   MUNCHIES ON MAPLE - AI VOICE ASSISTANT (Retell)
   One file for every page. Every "Call AI Assistant" button calls callRestaurant().

   SETUP: paste your Retell PUBLIC key below (Retell dashboard -> API Keys -> Public Keys).
   On that key, allow the domain: vinaykanth-us.github.io
   A public key is safe in front-end code. Never put your secret API key here.
   Until a public key is set, the button opens the Retell share link as before.
========================================== */

const RETELL_PUBLIC_KEY = "public_key_c036211d19017dcbccd95";
const RETELL_AGENT_ID = "agent_50154412b141a7c91be232846f";
const RETELL_SHARE_LINK = "https://agent.retellai.com/orb/agent_50154412b141a7c91be232846f?token=e66ca8441852ef5e52f5ec19f13c6981";

let retellCall = null;

function isCallPage() {
    return /call\.html$/.test(location.pathname);
}

function setButtons(label, live) {
    document.querySelectorAll(".ai-call-btn").forEach(btn => {
        const dot = btn.querySelector(".live-dot");
        btn.textContent = label;
        if (dot) btn.prepend(dot);
        btn.classList.toggle("is-live", !!live);
    });
}

function renderTranscript(items) {
    const body = document.getElementById("transcriptBody");
    if (!body) return;
    const turns = (items || []).filter(t => (t.role === "agent" || t.role === "user") && t.content);
    if (!turns.length) return;
    body.innerHTML = turns.map(t => `
        <div class="transcript-line ${t.role}" style="margin:0 0 10px;padding:10px 14px;border-radius:14px;max-width:85%;${t.role === "user" ? "margin-left:auto;background:#f3e8ff;" : "background:#f7f7f7;"}">
            <strong style="display:block;font-size:12px;opacity:.7;margin-bottom:2px;">${t.role === "user" ? "You" : "DB Mart Assistant"}</strong>
            ${String(t.content).replace(/[<>&]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]))}
        </div>`).join("");
    body.scrollTop = body.scrollHeight;
}

function setStatus(text) {
    const badge = document.querySelector(".coming-soon-badge");
    if (badge) badge.textContent = text;
}

async function startInPageCall() {
    setButtons("Connecting…", true);
    setStatus("Connecting");
    const section = document.querySelector(".transcript-section");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });

    try {
        const { RetellClient } = await import("https://esm.sh/retell-client-js-sdk@3.0.4");
        const client = new RetellClient({ key: RETELL_PUBLIC_KEY });
        retellCall = client.createWebCall({
            agent_id: RETELL_AGENT_ID,
            transcript: true,
            hooks: {
                onStatus: status => {
                    if (status === "live") { setButtons("End Call", true); setStatus("Live"); }
                },
                onTranscript: transcript => renderTranscript(transcript),
                onEnd: () => { retellCall = null; setButtons("Call AI Assistant to Order", false); setStatus("Call ended"); },
                onError: err => {
                    console.error("Retell call error:", err);
                    retellCall = null;
                    setButtons("Call AI Assistant to Order", false);
                    setStatus("Couldn't connect");
                    alert("The AI assistant couldn't connect. Please allow microphone access and try again, or call (860) 555-0100.");
                }
            }
        });
    } catch (err) {
        console.error("Retell SDK failed to load:", err);
        window.open(RETELL_SHARE_LINK, "_blank");
        setButtons("Call AI Assistant to Order", false);
        setStatus("Coming Soon");
    }
}

function callRestaurant() {
    // No public key yet: use the Retell share link (same tab works on phones that block pop-ups).
    if (!RETELL_PUBLIC_KEY) {
        const win = window.open(RETELL_SHARE_LINK, "_blank");
        if (!win) location.href = RETELL_SHARE_LINK;
        return;
    }
    // Other pages: go to the call page, where the live transcript shows.
    if (!isCallPage()) {
        location.href = "call.html#talk";
        return;
    }
    // Call page: toggle the call.
    if (retellCall) {
        retellCall.end();
        return;
    }
    startInPageCall();
}

window.callRestaurant = callRestaurant;
