/**
 * Chuze IT Solutions - Architecture Control Engine
 * Extended Light-Adaptive Core Router Configuration
 */

// --- SPA Visual Matrix Layout Router ---
const activeViews = [
    'home', 'blog', 'contact','service-migration', 'service-support',
    'tp-ms-migration', 'tp-ms-digital', 'tp-ms-data-ai', 'tp-ms-security-gov', 'tp-ms-managed', 'tp-ms-modern-work', 'tp-ms-security',
    'tp-aws-migration', 'tp-aws-data-ai', 'tp-aws-security-gov', 'tp-aws-managed',
    'tp-sec-consulting', 'tp-sec-gap', 'tp-sec-pen', 'tp-sec-red', 'tp-sec-tabletop', 'tp-sec-remediation'
];





function processNavigation(targetPageId) {
    if (!activeViews.includes(targetPageId)) return;

    activeViews.forEach(viewId => {
        const DOMElement = document.getElementById(`view-${viewId}`);
        if (DOMElement) {
            if (viewId === targetPageId) {
                DOMElement.classList.remove('hidden');
            } else {
                DOMElement.classList.add('hidden');
            }
        }
    });

    // Sync Navigation Elements Anchor Classes
    // Sync Navigation Elements Anchor Classes & Drawer State Checks
    // Sync Navigation Elements Anchor Classes & Drawer State Checks
    document.querySelectorAll('.view-link').forEach(anchorLink => {
        anchorLink.addEventListener('click', (e) => {
            const targetPageId = anchorLink.getAttribute('data-target');
            processNavigation(targetPageId);

            // Only collapse the drawer container if the menu item clicked isn't an accordion link
            if (mobileDrawer && !anchorLink.closest('#mobile-services-menu') && !anchorLink.closest('#mobile-practices-menu')) {
                mobileDrawer.classList.add('hidden');
            }
        });
    });

    if (window.location.hash !== `#${targetPageId}`) {
        window.location.hash = targetPageId;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });


    

}

// === THIS LINE IS TO BREAK THROUGH MODULE SCOPING ===
window.processNavigation = processNavigation;

// Global UI Navigation Event Listeners
document.addEventListener('click', (event) => {
    const activeTrigger = event.target.closest('.view-link');
    if (activeTrigger) {
        const targetViewId = activeTrigger.getAttribute('data-target');
        if (activeViews.includes(targetViewId)) {
            event.preventDefault();
            processNavigation(targetViewId);
            
            const mobileDrawer = document.getElementById('mobile-drawer');
            if (mobileDrawer) mobileDrawer.classList.add('hidden');
        }
    }
});

window.addEventListener('hashchange', () => {
    const rawHash = window.location.hash.replace('#', '');
    if (activeViews.includes(rawHash)) {
        processNavigation(rawHash);
    }
});









// Mobile Drawer Accordion Toggle for Trusted Practices
document.addEventListener('DOMContentLoaded', () => {
    const tpTrigger = document.getElementById('mobile-tp-trigger');
    const tpContent = document.getElementById('mobile-tp-content');
    const tpChevron = document.getElementById('mobile-tp-chevron');

    if (tpTrigger && tpContent && tpChevron) {
        tpTrigger.addEventListener('click', (e) => {
            // Prevent event from bubbling out unexpectedly
            e.stopPropagation(); 
            
            // Toggle visibility classes
            const isHidden = tpContent.classList.toggle('hidden');
            
            // Rotate chevron depending on status
            if (isHidden) {
                tpChevron.classList.remove('rotate-180');
            } else {
                tpChevron.classList.add('rotate-180');
            }
        });
    }
});











// --- Dynamic Technical Blog Content Engine Matrix ---
const blogDatabase = {
    "blog-1": {
        title: "Architecting Immutable Infrastructure: Moving Beyond Basic Auto-Scaling Groups",
        category: "Cloud Transformation",
        date: "May 24, 2026",
        content: `
            <p class="font-semibold text-slateDark mb-2">The core vulnerability within traditional infrastructure auto-scaling configurations is operational drift.</p>
            <p class="mb-4">When application scaling engines deploy vanilla instances and immediately execute post-boot shell configuration files (like user-data updates), the operational runtime window encounters a variable risk surface. Network package timeouts, repository version step-changes, or runtime image download drops introduce minor disparities across distributed environments. These disparities lead directly to configuration drift—the root cause of many multi-region operational failures.</p>
            <h4 class="text-slateDark font-bold mt-4 mb-2">Transitioning to Declarative Immutability</h4>
            <p class="mb-4">Chuze IT Solutions resolves this failure surface by enforcing declarative immutability models via automated continuous deployment code repositories. Instead of modifying instances post-boot, our structural build tracks pre-bake static deployment configurations. Every service scale iteration executes fully immutable, tested deployment artifacts, ensuring complete parity across nodes.</p>
            <p class="border-l-4 border-logoBlue pl-4 italic text-slateMuted my-4 bg-slate-50 p-3 rounded-r-lg">Result Matrix: Machine start envelopes decrease from over 4 minutes down to under 18 seconds, completely eliminating configuration variance across high-throughput server clusters.</p>
            <p class="mb-2">Furthermore, by integrating programmatic health hooks right inside the load-balancer core, instances failing basic structural verifications are automatically caught and replaced before taking on active production workloads.</p>
        `
    },
    "blog-2": {
        title: "Deconstructing Zero-Trust: Real-Time Token Attestation in Distributed Systems",
        category: "Cybersecurity Architecture",
        date: "May 12, 2026",
        content: `
            <p class="font-semibold text-slateDark mb-2">Perimeter firewall configurations provide a false sense of architectural safety in modern enterprise deployments.</p>
            <p class="mb-4">Once a malicious actor passes traditional external validation checkpoints, internal lateral movement paths across network interfaces remain relatively unimpeded. True architecture security models demand complete zero-trust implementations, meaning every microservice intersection must assume total hostility from connected components.</p>
            <h4 class="text-slateDark font-bold mt-4 mb-2">Executing Low-Latency Attestation Layer Matrices</h4>
            <p class="mb-4">To enforce absolute internal segmentation without introducing processing delay barriers, we deploy localized token attestation filters directly beside processing points. By combining short-lived, encrypted signature systems with secure key exchanges, our platform setups audit transaction validity dynamically at every structural node interface link.</p>
            <p class="mb-2">This configuration stops session hijacking tracking paths completely and isolates compromised data points within seconds, preserving database record isolation parameters during critical operation spikes.</p>
        `
    },
    "blog-3": {
        title: "Optimizing Telemetry Pipeline Overheads in High-Throughput Kubernetes Environments",
        category: "DevOps & Scale Engines",
        date: "April 29, 2026",
        content: `
            <p class="font-semibold text-slateDark mb-2">Excessive analytical telemetry processing operations can inadvertently choke network channel parameters.</p>
            <p class="mb-4">In high-density cluster platforms, standard microservice log outputs can consume substantial processing and storage footprints. Without intentional structure parsing, the computing resources dedicated to monitoring infrastructure can easily eclipse the application layer limits themselves.</p>
            <h4 class="text-slateDark font-bold mt-4 mb-2">Enforcing Adaptive Metric Collector Filtering Channels</h4>
            <p class="mb-4">We minimize tracking data payloads by designing edge aggregation routers directly inside cluster nodes. These engines dynamically drop repetitive system log streams and group routine events before sending them to permanent storage systems, ensuring deep performance data visibility while reclaiming vital compute capacity.</p>
        `
    }
};

// Hook Into Blog Interaction Components
document.addEventListener('click', (e) => {
    const blogTrigger = e.target.closest('.blog-expand-trigger');
    if (blogTrigger) {
        e.preventDefault();
        const targetBlogKey = blogTrigger.getAttribute('data-blog');
        const blogData = blogDatabase[targetBlogKey];
        
        if (blogData) {
            document.getElementById('modal-category').textContent = `${blogData.category} // ${blogData.date}`;
            document.getElementById('modal-content').innerHTML = `
                <h2 class="text-2xl font-bold text-slateDark mb-4 leading-snug">${blogData.title}</h2>
                <div class="mt-4 text-slateMuted space-y-4 font-normal">${blogData.content}</div>
            `;
            
            const modalEl = document.getElementById('blog-modal');
            modalEl.classList.remove('hidden');
            setTimeout(() => modalEl.classList.remove('opacity-0'), 10);
        }
    }
});

// Close Blog Modal Functionality
const closeModalBtn = document.getElementById('modal-close');
const blogModal = document.getElementById('blog-modal');
if (closeModalBtn && blogModal) {
    const performClose = () => {
        blogModal.classList.add('opacity-0');
        setTimeout(() => blogModal.classList.add('hidden'), 300);
    };
    closeModalBtn.onclick = performClose;
    blogModal.onclick = (e) => { if (e.target === blogModal) performClose(); };
}

// --- High-Performance Lightweight Canvas Matrix ---
const networkCanvas = document.getElementById('matrix-network-canvas');
if (networkCanvas) {
    const ctx = networkCanvas.getContext('2d');
    let points = [];
    const maxPointsCount = 50;

    class NodePoint {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * networkCanvas.width;
            this.y = Math.random() * networkCanvas.height;
            this.dx = (Math.random() - 0.5) * 0.25;
            this.dy = (Math.random() - 0.5) * 0.25;
        }
        update() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.x > networkCanvas.width || this.y < 0 || this.y > networkCanvas.height) {
                this.reset();
            }
        }
    }

    function syncCanvasDimensions() {
        networkCanvas.width = window.innerWidth;
        networkCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', syncCanvasDimensions);
    syncCanvasDimensions();

    for (let i = 0; i < maxPointsCount; i++) points.push(new NodePoint());

    function backgroundComputeEngineLoop() {
        ctx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);
        
        for (let i = 0; i < points.length; i++) {
            points[i].update();
            
            for (let j = i + 1; j < points.length; j++) {
                const distanceX = points[i].x - points[j].x;
                const distanceY = points[i].y - points[j].y;
                const computedDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                if (computedDistance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.strokeStyle = `rgba(0, 139, 226, ${0.08 * (1 - computedDistance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(backgroundComputeEngineLoop);
    }
    requestAnimationFrame(backgroundComputeEngineLoop);
}

// --- Form Validation & Submission Delivery Pipeline ---
const intakeForm = document.getElementById('corporateInquiryForm');
const logDisplay = document.getElementById('submissionLogs');
if (intakeForm && logDisplay) {
    intakeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('formSubmitBtn');
        
        submitBtn.disabled = true;
        logDisplay.classList.remove('hidden');
        logDisplay.className = "p-4 rounded-lg text-xs font-mono bg-blue-50 border border-blue-200 text-logoBlue";
        logDisplay.textContent = "Packing parameters. Clearing route nodes...";

        try {
            const serverPayload = new FormData(intakeForm);
            const callInstance = await fetch(intakeForm.action, {
                method: "POST",
                body: serverPayload,
                headers: { 'Accept': 'application/json' }
            });

            if (callInstance.ok) {
                logDisplay.className = "p-4 rounded-lg text-xs font-mono bg-emerald-50 border border-emerald-200 text-emerald-600";
                logDisplay.textContent = "Success // Connection Pipeline Active. Systems engineering team notified.";
                intakeForm.reset();
            } else {
                throw new Error("Target upstream route gateway rejected package.");
            }
        } catch (err) {
            logDisplay.className = "p-4 rounded-lg text-xs font-mono bg-rose-50 border border-rose-200 text-rose-600";
            logDisplay.textContent = `Error // Pipeline Transmission Interrupted: ${err.message}`;
        } finally {
            submitBtn.disabled = false;
        }
    });
}

// Mobile Dropdown Controller Actions
// const menuToggle = document.getElementById('menu-toggle');
// const mobileDrawer = document.getElementById('mobile-drawer');
// if (menuToggle && mobileDrawer) {
//     menuToggle.onclick = () => mobileDrawer.classList.toggle('hidden');
// }

// Initialize Active Baseline Location Tracking Point
const activeHashTarget = window.location.hash.replace('#', '');
if (activeViews.includes(activeHashTarget)) {
    processNavigation(activeHashTarget);
} else {
    processNavigation('home');
}







// Services-Mobile view
// ==========================================================================
// Services-Mobile view
// Mobile Services Accordion Dropdown Control Engine
// ==========================================================================
// ==========================================================================
// MOBILE NAVIGATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // Hamburger
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    // Services
    const servicesToggle = document.getElementById('mobile-services-toggle');
    const servicesMenu = document.getElementById('mobile-services-menu');
    const servicesChevron = document.getElementById('mobile-services-chevron');

    // Trusted Practices
    const tpTrigger = document.getElementById('mobile-tp-trigger');
    const tpContent = document.getElementById('mobile-tp-content');
    const tpChevron = document.getElementById('mobile-tp-chevron');

    // --------------------------------------------------
    // Hamburger Toggle
    // --------------------------------------------------
    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDrawer.classList.toggle('hidden');
        });
    }

    // --------------------------------------------------
    // Services Accordion
    // --------------------------------------------------
    if (servicesToggle && servicesMenu) {
        servicesToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            servicesMenu.classList.toggle('hidden');
            servicesChevron?.classList.toggle('rotate-180');
        });
    }

    // --------------------------------------------------
    // Trusted Practices Accordion
    // --------------------------------------------------
    // if (tpTrigger && tpContent) {
    //     tpTrigger.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         e.stopPropagation();

    //         tpContent.classList.toggle('hidden');
    //         tpChevron?.classList.toggle('rotate-180');
    //     });
    // }

    // --------------------------------------------------
    // Close drawer after clicking navigation link
    // --------------------------------------------------
    document.querySelectorAll('#mobile-drawer .view-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer?.classList.add('hidden');
        });
    });

    // --------------------------------------------------
    // Click outside closes drawer
    // --------------------------------------------------
    document.addEventListener('click', (e) => {
        if (
            mobileDrawer &&
            !mobileDrawer.classList.contains('hidden') &&
            !mobileDrawer.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            mobileDrawer.classList.add('hidden');
        }
    });
});