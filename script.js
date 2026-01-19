/**
 * DATA & CONSTANTS
 * Ported from data/prices.ts
 */
const GLOBAL_CONSTANTS = {
    MARGIN: 1.20,
    URGENCY_SURCHARGE: 0.15, // +15%
    ZONE_FACTORS: {
        A: 1.15, // Alta demanda
        B: 1.00, // Media
        C: 0.90, // Baja demanda
    }
};

const SERVICES = [
    // ALICATADOS Y SOLADOS
    { id: 'as1', category: 'Alicatados y Solados', name: 'Alicatado baño (paredes)', basePrice: 28, unit: '€/m²' },
    { id: 'as2', category: 'Alicatados y Solados', name: 'Alicatado cocina', basePrice: 26, unit: '€/m²' },
    { id: 'as3', category: 'Alicatados y Solados', name: 'Solado cerámico', basePrice: 24, unit: '€/m²' },
    { id: 'as4', category: 'Alicatados y Solados', name: 'Solado porcelánico', basePrice: 32, unit: '€/m²' },
    { id: 'as5', category: 'Alicatados y Solados', name: 'Retirada alicatado', basePrice: 8, unit: '€/m²' },
    { id: 'as6', category: 'Alicatados y Solados', name: 'Nivelado suelo', basePrice: 10, unit: '€/m²' },
    { id: 'as7', category: 'Alicatados y Solados', name: 'Rodapié cerámico', basePrice: 6, unit: '€/ml' },
    { id: 'as8', category: 'Alicatados y Solados', name: 'Rejuntado', basePrice: 4, unit: '€/m²' },
    { id: 'as9', category: 'Alicatados y Solados', name: 'Impermeabilización', basePrice: 12, unit: '€/m²' },
    { id: 'as10', category: 'Alicatados y Solados', name: 'Plato ducha cerámico', basePrice: 180, unit: '€/ud' },

    // FONTANERÍA
    { id: 'f1', category: 'Fontanería', name: 'Sustitución grifería', basePrice: 75, unit: '€/ud', urgentAllowed: true },
    { id: 'f2', category: 'Fontanería', name: 'Instalación lavabo', basePrice: 120, unit: '€/ud' },
    { id: 'f3', category: 'Fontanería', name: 'Instalación inodoro', basePrice: 140, unit: '€/ud' },
    { id: 'f4', category: 'Fontanería', name: 'Instalación plato ducha', basePrice: 220, unit: '€/ud' },
    { id: 'f5', category: 'Fontanería', name: 'Cambio tuberías', basePrice: 18, unit: '€/ml' },
    { id: 'f6', category: 'Fontanería', name: 'Reparación fuga visible', basePrice: 90, unit: '€/ud', urgentAllowed: true },
    { id: 'f7', category: 'Fontanería', name: 'Sustitución sifón', basePrice: 45, unit: '€/ud' },
    { id: 'f8', category: 'Fontanería', name: 'Instalación termo eléctrico', basePrice: 260, unit: '€/ud' },
    { id: 'f9', category: 'Fontanería', name: 'Sustitución desagüe', basePrice: 70, unit: '€/ud', urgentAllowed: true },
    { id: 'f10', category: 'Fontanería', name: 'Llave de corte', basePrice: 40, unit: '€/ud', urgentAllowed: true },

    // ELECTRICIDAD
    { id: 'e1', category: 'Electricidad', name: 'Punto de luz', basePrice: 55, unit: '€/ud' },
    { id: 'e2', category: 'Electricidad', name: 'Enchufe', basePrice: 45, unit: '€/ud' },
    { id: 'e3', category: 'Electricidad', name: 'Mecanismo', basePrice: 30, unit: '€/ud' },
    { id: 'e4', category: 'Electricidad', name: 'LED empotrado', basePrice: 60, unit: '€/ud' },
    { id: 'e5', category: 'Electricidad', name: 'Canalización vista', basePrice: 20, unit: '€/ml' },
    { id: 'e6', category: 'Electricidad', name: 'Reforma eléctrica parcial', basePrice: 450, unit: '€/estancia' },
    { id: 'e7', category: 'Electricidad', name: 'Reforma eléctrica completa', basePrice: 45, unit: '€/m²' },
    { id: 'e8', category: 'Electricidad', name: 'Timbre / videoportero', basePrice: 160, unit: '€/ud' },

    // CARPINTERÍA DE MADERA
    { id: 'cm1', category: 'Carpintería de Madera', name: 'Puerta interior', basePrice: 220, unit: '€/ud' },
    { id: 'cm2', category: 'Carpintería de Madera', name: 'Sustitución puerta', basePrice: 260, unit: '€/ud' },
    { id: 'cm3', category: 'Carpintería de Madera', name: 'Rodapié madera', basePrice: 7, unit: '€/ml' },
    { id: 'cm4', category: 'Carpintería de Madera', name: 'Armario modular', basePrice: 380, unit: '€/ud' },
    { id: 'cm5', category: 'Carpintería de Madera', name: 'Mueble cocina', basePrice: 180, unit: '€/ud' },
    { id: 'cm6', category: 'Carpintería de Madera', name: 'Ajuste puertas', basePrice: 35, unit: '€/ud' },
    { id: 'cm7', category: 'Carpintería de Madera', name: 'Encimera madera', basePrice: 95, unit: '€/ml' },
    { id: 'cm8', category: 'Carpintería de Madera', name: 'Lijado/barnizado', basePrice: 18, unit: '€/m²' },
    { id: 'cm9', category: 'Carpintería de Madera', name: 'Estanterías', basePrice: 45, unit: '€/ml' },

    // CARPINTERÍA METÁLICA
    { id: 'cmet1', category: 'Carpintería Metálica', name: 'Ventana aluminio', basePrice: 420, unit: '€/ud' },
    { id: 'cmet2', category: 'Carpintería Metálica', name: 'Sustitución ventana', basePrice: 480, unit: '€/ud' },
    { id: 'cmet3', category: 'Carpintería Metálica', name: 'Puerta metálica', basePrice: 650, unit: '€/ud' },
    { id: 'cmet4', category: 'Carpintería Metálica', name: 'Rejas fijas', basePrice: 110, unit: '€/m²' },
    { id: 'cmet5', category: 'Carpintería Metálica', name: 'Rejas abatibles', basePrice: 160, unit: '€/m²' },
    { id: 'cmet6', category: 'Carpintería Metálica', name: 'Barandilla', basePrice: 140, unit: '€/ml' },
    { id: 'cmet7', category: 'Carpintería Metálica', name: 'Cerramiento terraza', basePrice: 380, unit: '€/m²' },
    { id: 'cmet8', category: 'Carpintería Metálica', name: 'Mosquiteras', basePrice: 90, unit: '€/ud' },
    { id: 'cmet9', category: 'Carpintería Metálica', name: 'Persianas aluminio', basePrice: 220, unit: '€/ud' },
    { id: 'cmet10', category: 'Carpintería Metálica', name: 'Reparaciones', basePrice: 85, unit: '€/ud' },

    // REFORMAS GENERALES
    { id: 'rg1', category: 'Reformas Generales', name: 'Reforma baño', basePrice: 3800, unit: '€/pack' },
    { id: 'rg2', category: 'Reformas Generales', name: 'Reforma cocina', basePrice: 6500, unit: '€/pack' },
    { id: 'rg3', category: 'Reformas Generales', name: 'Reforma vivienda', basePrice: 520, unit: '€/m²' },
    { id: 'rg4', category: 'Reformas Generales', name: 'Demoliciones', basePrice: 12, unit: '€/m²' },
    { id: 'rg5', category: 'Reformas Generales', name: 'Retirada escombros', basePrice: 45, unit: '€/m³' },
    { id: 'rg6', category: 'Reformas Generales', name: 'Gestión residuos', basePrice: 30, unit: '€/m³' },
    { id: 'rg7', category: 'Reformas Generales', name: 'Pintura interior', basePrice: 9, unit: '€/m²' },
    { id: 'rg8', category: 'Reformas Generales', name: 'Enlucido paredes', basePrice: 14, unit: '€/m²' },
    { id: 'rg9', category: 'Reformas Generales', name: 'Techo pladur', basePrice: 32, unit: '€/m²' },
    { id: 'rg10', category: 'Reformas Generales', name: 'Tabiques pladur', basePrice: 38, unit: '€/m²' },
];

const CATEGORY_SEO_TEXT = {
    'Reformas Generales': 'Reforma integral de baño o cocina en Gran Canaria con precio cerrado y cálculo inmediato.',
    'Fontanería': 'Fontanero en Gran Canaria para cambio de grifería y reparación de fugas con opción urgente.',
    'Electricidad': 'Electricista en Las Palmas y alrededores para puntos de luz y reformas eléctricas completas.',
    'Carpintería de Madera': 'Ventanas de aluminio y carpintería interior en Gran Canaria con precios por unidad.',
    'Carpintería Metálica': 'Ventanas de aluminio y soluciones metálicas en Gran Canaria.',
    'Alicatados y Solados': 'Alicatado de baños y cocinas en Gran Canaria con precio por m² y desglose real.',
};

/**
 * STATE MANAGEMENT
 */
const state = {
    zone: 'B',
    isUrgent: false,
    selection: {}, // { serviceId: quantity }
    name: '',
    description: ''
};

/**
 * LOGIC
 * Ported from utils/calculator.ts
 */
function calculateBudget(selection, zone, isUrgent) {
    let servicesTotal = 0;
    const serviceLines = [];

    for (const [id, qty] of Object.entries(selection)) {
        if (qty > 0) {
            const service = SERVICES.find(s => s.id === id);
            if (service) {
                const lineTotal = service.basePrice * qty;
                servicesTotal += lineTotal;
                serviceLines.push({ name: service.name, quantity: qty, subtotal: lineTotal });
            }
        }
    }

    const zoneFactor = GLOBAL_CONSTANTS.ZONE_FACTORS[zone];
    const withZone = servicesTotal * zoneFactor;
    const zoneSurcharge = withZone - servicesTotal;

    const marginFactor = GLOBAL_CONSTANTS.MARGIN; // 1.20
    const withMargin = withZone * marginFactor;
    const marginAmount = withMargin - withZone;

    let total = withMargin;
    let urgencySurcharge = 0;

    if (isUrgent) {
        const urgencyFactor = 1 + GLOBAL_CONSTANTS.URGENCY_SURCHARGE; // 1.15
        const final = total * urgencyFactor;
        urgencySurcharge = final - total;
        total = final;
    }

    return {
        servicesTotal,
        zoneFactor,
        zoneSurcharge,
        marginFactor,
        marginAmount,
        urgencyFactor: isUrgent ? 1.15 : 1,
        urgencySurcharge,
        total,
        serviceLines
    };
}

function generateWhatsAppLink(breakdown, zone, customerName, projectDesc) {
    const number = "34660428549"; // Placeholder number

    let text = `Hola, quiero presupuesto para una reforma en Gran Canaria.\n`;
    if (customerName) text += `Soy: ${customerName}\n`;
    text += `Zona: ${zone}\n`;
    text += `Servicios seleccionados:\n`;
    breakdown.serviceLines.forEach(line => {
        text += `- ${line.name} x${line.quantity}\n`;
    });
    text += `\nTotal Estimado: ${breakdown.total.toFixed(2)} € (IGIC no incl.)\n`;
    if (projectDesc) text += `\nDetalles: ${projectDesc}`;

    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * DOM MANIPULATION & APP INIT
 */

document.addEventListener('DOMContentLoaded', () => {
    initZoneSelector();
    renderServices();
    initUrgencyToggle();
    initInputs();
    updateBudgetSummary(); // Initial render
    initLeadTracking(); // Lead tracking initialization
});

function initZoneSelector() {
    const zones = [
        { id: 'A', label: 'Zona A', desc: 'Las Palmas, Telde, Mogán', micro: 'Zona urbana estándar' },
        { id: 'B', label: 'Zona B', desc: 'Arucas, Santa Brígida, Gáldar', micro: '+0–5% desplazamiento' },
        { id: 'C', label: 'Zona C', desc: 'Zonas rurales', micro: '+10–15% desplazamiento' },
    ];

    const container = document.getElementById('zone-container');
    container.innerHTML = zones.map(zone => `
        <div class="zone-card ${state.zone === zone.id ? 'selected' : ''}" data-id="${zone.id}" onclick="selectZone('${zone.id}')">
            <div class="zone-header">${zone.label}</div>
            <div class="zone-desc">${zone.desc}</div>
            <div class="zone-micro">${zone.micro}</div>
        </div>
    `).join('');
}

function selectZone(zoneId) {
    state.zone = zoneId;

    // Update visual selection
    document.querySelectorAll('.zone-card').forEach(card => {
        if (card.dataset.id === zoneId) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    updateBudgetSummary();
}

function renderServices() {
    const categories = Array.from(new Set(SERVICES.map(s => s.category)));
    const container = document.getElementById('services-container');

    container.innerHTML = categories.map(cat => {
        const catServices = SERVICES.filter(s => s.category === cat);
        const seoText = CATEGORY_SEO_TEXT[cat] || '';

        return `
            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                    ${cat}
                    <span class="icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-seo-text">${seoText}</div>
                    ${catServices.map(service => renderServiceItem(service)).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function renderServiceItem(service) {
    const qty = state.selection[service.id] || 0;
    return `
        <div class="stepper-container">
            <div class="service-info">
                <h4>${service.name}</h4>
                <span class="service-price">${service.basePrice} ${service.unit}</span>
            </div>
            <div class="stepper-controls">
                <button class="stepper-btn" onclick="updateService('${service.id}', -1)" ${qty <= 0 ? 'disabled' : ''}>-</button>
                <span class="stepper-value" id="qty-${service.id}">${qty}</span>
                <button class="stepper-btn" onclick="updateService('${service.id}', 1)">+</button>
            </div>
        </div>
    `;
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('open');

    // Close all others (optional - standard accordion behavior)
    // document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));

    if (isOpen) {
        content.classList.remove('open');
        button.querySelector('.icon').textContent = '▼';
    } else {
        content.classList.add('open');
        button.querySelector('.icon').textContent = '▲';
    }
}

function updateService(serviceId, change) {
    const currentQty = state.selection[serviceId] || 0;
    const newQty = Math.max(0, currentQty + change);

    state.selection[serviceId] = newQty;

    // Update DOM specifically for this item (optimization)
    const qtySpan = document.getElementById(`qty-${serviceId}`);
    if (qtySpan) qtySpan.textContent = newQty;

    // Update the minus button state
    const minusBtn = qtySpan.previousElementSibling;
    minusBtn.disabled = newQty <= 0;

    updateBudgetSummary();
}

function initUrgencyToggle() {
    const toggleInput = document.getElementById('urgency-toggle');
    toggleInput.addEventListener('change', (e) => {
        state.isUrgent = e.target.checked;

        const card = document.querySelector('.urgency-card');
        const icon = document.getElementById('alert-icon');

        if (state.isUrgent) {
            card.classList.add('active');
            icon.setAttribute('stroke', '#f59f00');
        } else {
            card.classList.remove('active');
            icon.setAttribute('stroke', '#888');
        }

        updateBudgetSummary();
    });
}

function initInputs() {
    document.getElementById('input-name').addEventListener('input', (e) => {
        state.name = e.target.value;
        updateWhatsAppLink();
    });

    document.getElementById('input-desc').addEventListener('input', (e) => {
        state.description = e.target.value;
        updateWhatsAppLink();
    });
}

function updateBudgetSummary() {
    let breakdown = calculateBudget(state.selection, state.zone, state.isUrgent);

    // Check for urgency availability
    let hasUrgentServices = false;
    for (const [id, qty] of Object.entries(state.selection)) {
        if (qty > 0) {
            const service = SERVICES.find(s => s.id === id);
            if (service && service.urgentAllowed) {
                hasUrgentServices = true;
                break;
            }
        }
    }

    // Auto-disable urgency if not available
    if (!hasUrgentServices && state.isUrgent) {
        state.isUrgent = false;
        document.getElementById('urgency-toggle').checked = false;
        // Trigger UI update for the toggle visual
        const card = document.querySelector('.urgency-card');
        const icon = document.getElementById('alert-icon');
        card.classList.remove('active');
        icon.setAttribute('stroke', '#888');

        // Recalculate breakdown with new state
        breakdown = calculateBudget(state.selection, state.zone, state.isUrgent);
    }

    // Show/Hide Urgency Card & Update Text
    const urgencySection = document.querySelector('.urgency-card') ? document.querySelector('.urgency-card').parentElement : null;
    const urgencyTitle = document.querySelector('#urgency-title span');

    if (urgencySection) {
        if (hasUrgentServices) {
            urgencySection.style.display = 'block';
            if (urgencyTitle) {
                urgencyTitle.textContent = "Servicio urgente · atención prioritaria";
            }
        } else {
            urgencySection.style.display = 'none';
        }
    }

    // New Visibility Logic
    // count services with quantity > 0
    let servicesCount = 0;
    for (const qty of Object.values(state.selection)) {
        if (qty > 0) servicesCount++;
    }

    const showSummary = servicesCount >= 2 || breakdown.total > 150;

    const summaryCard = document.getElementById('budget-summary-card');
    const placeholder = document.getElementById('summary-placeholder');

    if (showSummary) {
        summaryCard.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
    } else {
        summaryCard.style.display = 'none';
        if (placeholder) placeholder.style.display = 'block';
        return; // Stop updating values if hidden
    }

    // Update Values
    document.getElementById('val-services').textContent = breakdown.servicesTotal.toFixed(2) + ' €';

    const zoneRow = document.getElementById('row-zone');
    const valZone = document.getElementById('val-zone');
    if (breakdown.zoneSurcharge !== 0) {
        valZone.textContent = (breakdown.zoneSurcharge > 0 ? '+' : '') + breakdown.zoneSurcharge.toFixed(2) + ' €';
    } else {
        valZone.textContent = '0.00 €';
    }
    // Update label text for zone
    document.getElementById('lbl-zone').textContent = `Ajuste Zona (${state.zone}):`;

    document.getElementById('val-margin').textContent = '+' + breakdown.marginAmount.toFixed(2) + ' €';

    const urgencyRow = document.getElementById('row-urgency');
    if (breakdown.urgencySurcharge > 0) {
        urgencyRow.style.display = 'flex';
        document.getElementById('val-urgency').textContent = '+' + breakdown.urgencySurcharge.toFixed(2) + ' €';
    } else {
        urgencyRow.style.display = 'none';
    }

    // Update Urgency Notice visibility
    const urgencyNotice = document.getElementById('urgency-notice');
    if (urgencyNotice) {
        urgencyNotice.style.display = (breakdown.urgencySurcharge > 0) ? 'block' : 'none';
    }

    // Update WhatsApp Hint Text - REMOVED to reduce noise
    // The static text "Enviar presupuesto por WhatsApp" will remain.

    document.getElementById('val-total').textContent = breakdown.total.toFixed(2) + ' €';

    updateWhatsAppLink(breakdown);
}

function updateWhatsAppLink(breakdown) {
    if (!breakdown) {
        breakdown = calculateBudget(state.selection, state.zone, state.isUrgent);
    }
    const link = generateWhatsAppLink(breakdown, state.zone, state.name, state.description);
    document.getElementById('whatsapp-link').href = link;
    const miniLink = document.getElementById('whatsapp-mini-link');
    if (miniLink) miniLink.href = link;
}

/**
 * GESTIÓN DE LEADS (Invisible)
 */
const LeadManager = {
    STORAGE_KEY: 'costeobra_leads',

    saveLead: function (leadData) {
        try {
            const leads = this.getLeads();
            leads.push(leadData);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(leads));
            console.log('Lead registrado:', leadData.id);
        } catch (e) {
            console.error('Error al guardar lead:', e);
        }
    },

    getLeads: function () {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error al leer leads:', e);
            return [];
        }
    },

    clearLeads: function () {
        localStorage.removeItem(this.STORAGE_KEY);
        console.log('Leads borrados.');
    }
};

// Exponer en consola
window.getLeads = () => console.table(LeadManager.getLeads());
window.clearLeads = () => LeadManager.clearLeads();

function initLeadTracking() {
    const handleContactClick = (e) => {
        // Permitir comportamiento por defecto (abrir enlace) PERO interceptar para guardar datos primero.
        // Dado que no prevenimos el default inmediatamente para que el enlace funcione,
        // solo necesitamos asegurar que la operación de guardado sincrónica ocurra.

        // Sin embargo, usualmente es más seguro prevenir default, guardar y luego abrir.
        // Pero para enlaces de WhatsApp (a menudo target="_blank"), el clic directo es mejor para bloqueadores de popups.
        // LocalStorage es síncrono, por lo que debería funcionar bien solo ejecutando la lógica.

        const breakdown = calculateBudget(state.selection, state.zone, state.isUrgent);

        const lead = {
            id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString(),
            zona: state.zone,
            urgente: state.isUrgent,
            services: breakdown.serviceLines.map(s => `${s.name} (x${s.quantity})`),
            total: breakdown.total.toFixed(2),
            user_input: {
                name: state.name,
                description: state.description
            }
        };

        LeadManager.saveLead(lead);
    };

    const mainBtn = document.getElementById('whatsapp-link');
    const miniBtn = document.getElementById('whatsapp-mini-link');

    if (mainBtn) mainBtn.addEventListener('click', handleContactClick);
    if (miniBtn) miniBtn.addEventListener('click', handleContactClick);
}
