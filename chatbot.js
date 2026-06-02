// ==========================================================================
// SYSTEM AUTOMATION MATRIX: DECAPPED INTERACTIVE QUERY GENERATOR
// ==========================================================================
(() => {
    const chatDatabase = {
        "💼 About ChuzeIT": {
            "What is ChuzeIT?": "ChuzeIT is a tech company offering custom websites, digital solutions, automation tools, and business-branding products.",
            "Why choose ChuzeIT?": "We focus on reliability, clean design, modern tech stack, and client-first solutions.",
            "What industries do you work with?": "We work with startups, small businesses, tech founders, and enterprise clients worldwide."
        },
        "🛠 Services": {
            "What services do you provide?": "We offer Web Development, App Development, UI/UX Design, Marketing Tools, Workflow Automations, and AI-powered solutions.",
            "Do you build custom websites?": "Yes! We design and build fully custom, responsive, professional-grade websites.",
            "Can you create automation systems?": "Absolutely. We build custom automation scripts, dashboards, and integrations to streamline business operations."
        },
        "📞 Support & Contact": {
            "How can I contact you?": "You can reach us anytime at support@chuzeit.com.",
            "Do you offer after-launch support?": "Yes. We provide maintenance, improvements, and long-term service support.",
            "Where are you located?": "We operate remotely and serve clients across the globe.",
            "Get In Touch": "scroll_to_contact"
        }
    };

    let executionPathStack = []; 

    const uiTrigger = document.getElementById('chatbot-trigger');
    const uiPanel = document.getElementById('chatbot-panel');
    const uiClose = document.getElementById('chatbot-close');
    const uiLogs = document.getElementById('chatbot-logs');
    const uiOptionsWrapper = document.getElementById('chatbot-options-panel');

    if (!uiTrigger || !uiPanel || !uiLogs || !uiOptionsWrapper) return;

    // Toggle Chat Panel visibility Matrix
    function toggleSystemPanel() {
        if (uiPanel.classList.contains('active-matrix')) {
            uiPanel.classList.remove('opacity-100');
            uiPanel.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => uiPanel.classList.remove('active-matrix'), 300);
        } else {
            uiPanel.classList.add('active-matrix');
            setTimeout(() => uiPanel.classList.remove('opacity-0', 'translate-y-4'), 10);
            if (uiLogs.children.length === 0) {
                initializeSystemDialogue();
            }
        }
    }

    uiTrigger.onclick = (e) => { e.stopPropagation(); toggleSystemPanel(); };
    uiClose.onclick = (e) => { e.stopPropagation(); toggleSystemPanel(); };

    function initializeSystemDialogue() {
        uiLogs.innerHTML = '';
        executionPathStack = [];
        pushSystemLog('bot', "Welcome to the Chuze IT Solutions Architecture portal. Select an operational branch parameters workspace below to audit our technical paradigms.");
        renderCategoricalOptions();
    }

    function pushSystemLog(signatoryActor, textMessage) {
        const structuralRow = document.createElement('div');
        structuralRow.className = `flex w-full bubble-ingress ${signatoryActor === 'user' ? 'justify-end' : 'justify-start'}`;

        const dynamicBubble = document.createElement('div');
        dynamicBubble.className = signatoryActor === 'user'
            ? 'max-w-[80%] bg-logoBlue text-white font-medium text-xs px-4 py-3 rounded-2xl rounded-tr-none shadow-sm'
            : 'max-w-[80%] bg-white border border-slate-200/80 text-slateDark text-xs px-4 py-3 rounded-2xl rounded-tl-none shadow-sm leading-relaxed';
        
        dynamicBubble.textContent = textMessage;
        structuralRow.appendChild(dynamicBubble);
        uiLogs.appendChild(structuralRow);
        uiLogs.scrollTo({ top: uiLogs.scrollHeight, behavior: 'smooth' });
    }

    function generateInteractiveChip(displayText, interactionCallback) {
        const dynamicButton = document.createElement('button');
        dynamicButton.className = "text-xs font-semibold px-3 py-2 bg-slate-100 hover:bg-logoBlue/10 hover:text-logoBlue text-slateDark border border-slate-200/60 rounded-xl transition-all duration-200 active:scale-98 text-left";
        dynamicButton.textContent = displayText;
        dynamicButton.onclick = (e) => { e.stopPropagation(); interactionCallback(); };
        return dynamicButton;
    }

    function generateControlChip(displayText, operationalAction) {
        const dynamicBtn = document.createElement('button');
        dynamicBtn.className = "text-xs font-bold px-3 py-2 bg-slate-900 text-slate-200 hover:bg-logoNavy hover:text-white rounded-xl transition-all duration-200 mt-1 uppercase tracking-wider font-mono";
        dynamicBtn.textContent = displayText;
        dynamicBtn.onclick = (e) => { e.stopPropagation(); operationalAction(); };
        return dynamicBtn;
    }

    function renderCategoricalOptions() {
        uiOptionsWrapper.innerHTML = '';
        Object.keys(chatDatabase).forEach(categoryKey => {
            const chipElement = generateInteractiveChip(categoryKey, () => {
                pushSystemLog('user', categoryKey);
                executionPathStack.push(categoryKey);
                processPipelineAdvance(categoryKey);
            });
            uiOptionsWrapper.appendChild(chipElement);
        });
    }

    function processPipelineAdvance(categoryKey) {
        uiOptionsWrapper.innerHTML = '';
        renderEngineDelay(() => {
            pushSystemLog('bot', `Navigating to ${categoryKey} metrics workspace. Select a specification entry module to parse.`);
            const availableQueries = chatDatabase[categoryKey];
            
            Object.keys(availableQueries).forEach(queryKey => {
                const queryChip = generateInteractiveChip(queryKey, () => {
                    pushSystemLog('user', queryKey);
                    executeResolutionPath(categoryKey, queryKey);
                });
                uiOptionsWrapper.appendChild(queryChip);
            });

            appendContextResetControls();
        });
    }

    function executeResolutionPath(categoryKey, queryKey) {
        uiOptionsWrapper.innerHTML = '';
        const targetPayload = chatDatabase[categoryKey][queryKey];

        renderEngineDelay(() => {
            if (targetPayload === "scroll_to_contact") {
                pushSystemLog('bot', "Processing structural view displacement. Activating Secure Consultation Intake Route Pipeline...");
                
                // Smooth closure delay to let user register the bot's sign-off message
                setTimeout(() => {
                    toggleSystemPanel();
                    
                    // Safely invoke the globally exposed router sequence 
                    if (typeof window.processNavigation === 'function') {
                        window.processNavigation('contact');
                    } else {
                        // Fallback anchor method if layout module hasn't populated yet
                        const fallbackAnchor = document.getElementById('view-contact');
                        if (fallbackAnchor) {
                            fallbackAnchor.classList.remove('hidden');
                            fallbackAnchor.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }, 500);
            } else {
                pushSystemLog('bot', targetPayload);
                appendContextResetControls();
            }
        });
    }

    function appendContextResetControls() {
        const homeResetControl = generateControlChip("⟲ Main Menu Matrix", () => {
            initializeSystemDialogue();
        });
        uiOptionsWrapper.appendChild(homeResetControl);
    }

    function renderEngineDelay(executionCallback) {
        const structuralRow = document.createElement('div');
        structuralRow.className = "flex w-full justify-start bubble-ingress" ;
        structuralRow.id = "system-typing-payload";

        const dynamicBubble = document.createElement('div');
        dynamicBubble.className = "bg-white border border-slate-200/80 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1";
        dynamicBubble.innerHTML = `
            <span class="h-1.5 w-1.5 bg-slate-400 rounded-full typing-dot"></span>
            <span class="h-1.5 w-1.5 bg-slate-400 rounded-full typing-dot"></span>
            <span class="h-1.5 w-1.5 bg-slate-400 rounded-full typing-dot"></span>
        `;
        structuralRow.appendChild(dynamicBubble);
        uiLogs.appendChild(structuralRow);
        uiLogs.scrollTo({ top: uiLogs.scrollHeight, behavior: 'smooth' });

        setTimeout(() => {
            const runningIndicator = document.getElementById('system-typing-payload');
            if (runningIndicator) runningIndicator.remove();
            executionCallback();
        }, 750);
    }
})();