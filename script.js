// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize calculator
    initializeCalculator();
    
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        }
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.step, .feature-card, .result-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Calculator functionality
function initializeCalculator() {
    const monthlyExpensesInput = document.getElementById('monthly-expenses');
    const yieldRateSelect = document.getElementById('yield-rate');
    const timeframeSelect = document.getElementById('timeframe');
    
    // Add event listeners
    monthlyExpensesInput.addEventListener('input', calculateYield);
    yieldRateSelect.addEventListener('change', calculateYield);
    timeframeSelect.addEventListener('change', calculateYield);
    
    // Initial calculation
    calculateYield();
}

function calculateYield() {
    const monthlyExpenses = parseFloat(document.getElementById('monthly-expenses').value) || 0;
    const yieldRate = parseFloat(document.getElementById('yield-rate').value) || 10;
    const timeframe = parseInt(document.getElementById('timeframe').value) || 12;
    
    // Calculate monthly yield (assuming compound interest)
    const monthlyRate = yieldRate / 100 / 12;
    const monthlyYield = monthlyExpenses * monthlyRate;
    
    // Calculate annual yield
    const annualYield = monthlyYield * 12;
    
    // Calculate total earnings over the period
    let totalEarnings = 0;
    let currentBalance = monthlyExpenses;
    
    for (let month = 0; month < timeframe; month++) {
        const monthlyInterest = currentBalance * monthlyRate;
        totalEarnings += monthlyInterest;
        currentBalance += monthlyInterest; // Compound interest
    }
    
    // Update the display
    updateDisplay(monthlyYield, annualYield, totalEarnings);
    
    // Add visual feedback
    animateResults();
}

function updateDisplay(monthlyYield, annualYield, totalEarnings) {
    document.getElementById('monthly-yield').textContent = formatCurrency(monthlyYield);
    document.getElementById('annual-yield').textContent = formatCurrency(annualYield);
    document.getElementById('total-earnings').textContent = formatCurrency(totalEarnings);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function animateResults() {
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach((card, index) => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, index * 100);
    });
}

// Scroll to calculator function
function scrollToCalculator() {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Focus on the first input after scrolling
    setTimeout(() => {
        document.getElementById('monthly-expenses').focus();
    }, 1000);
}

// Scroll to pricing function
function scrollToPricing() {
    const pricingSection = document.getElementById('pricing');
    pricingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Pricing button functionality
function handlePricingButton(planType) {
    if (planType === 'free') {
        // Handle free tier signup
        alert('Redirecting to free tier signup...');
        // In a real app, this would redirect to signup page
    } else if (planType === 'premium') {
        // Handle premium signup
        alert('Redirecting to premium trial signup...');
        // In a real app, this would redirect to premium signup
    }
}

// Add event listeners for pricing buttons
document.addEventListener('DOMContentLoaded', function() {
    const freeButton = document.querySelector('.free-button');
    const premiumButton = document.querySelector('.premium-button');
    
    if (freeButton) {
        freeButton.addEventListener('click', () => handlePricingButton('free'));
    }
    
    if (premiumButton) {
        premiumButton.addEventListener('click', () => handlePricingButton('premium'));
    }
});

// Add interactive bill management simulation
function createBillManagementSimulation() {
    const billCategories = [
        { name: 'Rent/Mortgage', amount: 1200, frequency: 'monthly' },
        { name: 'Utilities', amount: 150, frequency: 'monthly' },
        { name: 'Internet', amount: 80, frequency: 'monthly' },
        { name: 'Phone', amount: 60, frequency: 'monthly' },
        { name: 'Insurance', amount: 200, frequency: 'monthly' },
        { name: 'Subscriptions', amount: 50, frequency: 'monthly' }
    ];
    
    // This would be expanded in a real application
    return billCategories;
}

// Add yield farming simulation
function simulateYieldFarming() {
    const strategies = [
        {
            name: 'Conservative',
            apy: 8,
            risk: 'Low',
            description: 'USDC lending on Aave'
        },
        {
            name: 'Moderate',
            apy: 10,
            risk: 'Medium',
            description: 'USDC/ETH liquidity pool'
        },
        {
            name: 'Aggressive',
            apy: 12,
            risk: 'High',
            description: 'Multi-strategy yield farming'
        }
    ];
    
    return strategies;
}

// Add real-time yield tracking simulation
function startYieldTracking() {
    // Simulate real-time yield updates
    setInterval(() => {
        const yieldElements = document.querySelectorAll('.result-value');
        yieldElements.forEach(element => {
            element.style.color = '#4CAF50';
            setTimeout(() => {
                element.style.color = '';
            }, 500);
        });
    }, 5000);
}

// Initialize yield tracking when page loads
document.addEventListener('DOMContentLoaded', function() {
    startYieldTracking();
});

// Add mobile menu functionality
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('nav-link')) {
        e.target.click();
    }
});

// Add form validation
function validateInput(input) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < 0) {
        input.style.borderColor = '#ff4444';
        input.style.boxShadow = '0 0 10px rgba(255, 68, 68, 0.3)';
        return false;
    } else {
        input.style.borderColor = '#e9ecef';
        input.style.boxShadow = 'none';
        return true;
    }
}

// Add input validation to calculator
document.addEventListener('DOMContentLoaded', function() {
    const monthlyExpensesInput = document.getElementById('monthly-expenses');
    monthlyExpensesInput.addEventListener('blur', function() {
        validateInput(this);
    });
    
    monthlyExpensesInput.addEventListener('input', function() {
        if (this.value && !validateInput(this)) {
            return;
        }
        calculateYield();
    });
});

// Add loading states for better UX
function showLoadingState(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Add success animations
function showSuccessAnimation() {
    const successIcon = document.createElement('div');
    successIcon.innerHTML = '✓';
    successIcon.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #4CAF50;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        z-index: 10000;
        animation: successPulse 0.6s ease-out;
    `;
    
    document.body.appendChild(successIcon);
    
    setTimeout(() => {
        document.body.removeChild(successIcon);
    }, 600);
}

// Add CSS for success animation
const style = document.createElement('style');
style.textContent = `
    @keyframes successPulse {
        0% { transform: translate(-50%, -50%) scale(0); }
        50% { transform: translate(-50%, -50%) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(style);

// Add tooltip functionality
function addTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Initialize tooltips when page loads
document.addEventListener('DOMContentLoaded', addTooltips);
