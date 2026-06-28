const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const legalContent = {
  imprint: {
    title: "Impressum",
    body: `
      <address>
        <strong>ANTIVARI Logistics UG (limited liability)</strong><br />
        Bunsenstraße 4<br />
        82152 Planegg<br />
        Germany
      </address>
      <p>
        Tel.: <a href="tel:+4917680704183">+49 (0) 176 807 04 183</a><br />
        E-Mail: <a href="mailto:hello@antivari.de">hello@antivari.de</a>
      </p>
      <p>
        Commercial Register: Munich Local Court<br />
        Registration Number: HRB 296004
      </p>
      <p>Managing Director: Snezana Kljun</p>
      <p>VAT Identification Number pursuant to § 27a of the German VAT Act: DE449715336</p>
    `,
  },
  privacy: {
    title: "Privacy Policy",
    body: `
      <h3>1. Data protection at a glance</h3>
      <h4>General information</h4>
      <p>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. Detailed information on data protection can be found in our privacy policy, which is linked below.</p>

      <h4>Data collection on this website</h4>
      <h4>Who is responsible for data collection on this website?</h4>
      <p>Data processing on this website is carried out by the website operator. Their contact details can be found in the section "Information on the responsible body" in this privacy policy.</p>

      <h4>How do we collect your data?</h4>
      <p>Your data is collected, firstly, because you provide it to us. This could include, for example, data that you enter into a contact form.</p>
      <p>Other data is collected automatically or with your consent by our IT systems when you visit the website. This is primarily technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you access this website.</p>

      <h4>What do we use your data for?</h4>
      <p>Some data is collected to ensure the website functions correctly. Other data may be used to analyze your user behavior.</p>

      <h4>What rights do you have regarding your data?</h4>
      <p>You have the right to obtain information free of charge at any time regarding the origin, recipients, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. You also have the right to lodge a complaint with the competent supervisory authority.</p>
      <p>You can contact us at any time with regard to this and other questions concerning data protection.</p>

      <h4>Analytics tools and third-party tools</h4>
      <p>When you visit this website, your browsing behavior may be statistically analyzed. This is done primarily using so-called analytics programs.</p>
      <p>Detailed information about these analytics programs can be found in the following privacy policy.</p>

      <h3>2. Hosting and Content Delivery Networks (CDN)</h3>
      <h4>External hosting</h4>
      <p>This website is hosted by an external service provider (host). The personal data collected on this website is stored on the host's servers. This may include, in particular, IP addresses, contact requests, metadata and communication data, contract data, contact information, names, website access data, and other data generated via a website.</p>
      <p>The use of the hosting provider is for the purpose of fulfilling our contractual obligations to our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast and efficient provision of our online service by a professional provider (Art. 6 para. 1 lit. f GDPR).</p>
      <p>Our hosting provider will only process your data to the extent necessary to fulfill its contractual obligations and will follow our instructions regarding this data.</p>
      <p>We use the following hosting provider:</p>
      <p>ALL-INKL.COM - Neue Medien Münnich<br />Owner: René Münnich<br />Hauptstraße 68 | D-02742 Friedersdorf</p>

      <h4>Conclusion of a data processing agreement</h4>
      <p>To ensure data processing in compliance with data protection regulations, we have concluded a data processing agreement with our hosting provider.</p>

      <h3>3. General information and mandatory disclosures</h3>
      <h4>Data protection</h4>
      <p>The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
      <p>When you use this website, various personal data are collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.</p>
      <p>Please note that data transmission over the internet (e.g., when communicating via email) can have security vulnerabilities. Complete protection of data against access by third parties is not possible.</p>

      <h4>Note regarding the responsible body</h4>
      <p>The responsible body for data processing on this website is:</p>
      <p>Antivari UG (limited liability)<br />Bunsenstraße 4<br />82152 Planegg</p>
      <p>Telephone: +49 (0) 176 807 04 183<br />Email: <a href="mailto:hello@antivari.de">hello@antivari.de</a></p>
      <p>The responsible entity is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).</p>

      <h4>Storage duration</h4>
      <p>Unless a more specific retention period is stated within this privacy policy, your personal data will remain with us until the purpose for processing the data no longer applies. If you submit a legitimate request for erasure or withdraw your consent to data processing, your data will be deleted, provided we have no other legally permissible grounds for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the data will be deleted once these grounds cease to apply.</p>

      <h4>Revocation of your consent to data processing</h4>
      <p>Many data processing operations are only possible with your explicit consent. You can revoke your consent at any time. The legality of data processing carried out before the revocation remains unaffected by the revocation.</p>

      <h4>Right to object to data processing in special cases and to direct marketing (Art. 21 GDPR)</h4>
      <p>If data processing is based on Article 6(1)(e) or (f) of the GDPR, you have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning you; this also applies to profiling based on these provisions. The specific legal basis for each processing operation can be found in this privacy policy. If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms or the processing serves the purpose of establishing, exercising or defending legal claims (objection pursuant to Art. 21 para. 1 GDPR).</p>
      <p>If your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of your personal data for such marketing; this also applies to profiling insofar as it is related to such direct marketing. If you object, your personal data will subsequently no longer be processed for direct marketing purposes (objection pursuant to Article 21(2) GDPR).</p>

      <h4>Right to lodge a complaint with the competent supervisory authority</h4>
      <p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work, or the place of the alleged infringement. This right to lodge a complaint is without prejudice to any other administrative or judicial remedy.</p>

      <h4>Right to data portability</h4>
      <p>You have the right to receive the data that we process automatically based on your consent or in fulfillment of a contract, either for yourself or for a third party, in a commonly used, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done if technically feasible.</p>

      <h4>SSL or TLS encryption</h4>
      <p>This site uses SSL/TLS encryption for security reasons and to protect the transmission of confidential information, such as orders or inquiries that you send to us as the site operator. You can recognize an encrypted connection by the fact that the browser's address bar changes from "http://" to "https://" and by the lock symbol in your browser's address bar.</p>
      <p>When SSL or TLS encryption is enabled, the data you send to us cannot be read by third parties.</p>

      <h4>Information, deletion and correction</h4>
      <p>Under applicable law, you have the right to request information, free of charge, about your stored personal data, its origin and recipients, and the purpose of the data processing, as well as the right to rectification or erasure of this data. You can contact us at any time with regard to this and any other questions concerning personal data.</p>

      <h4>Right to restriction of processing</h4>
      <p>You have the right to request the restriction of the processing of your personal data. You can contact us at any time to do so. The right to restrict processing exists in the following cases:</p>
      <p>If you dispute the accuracy of your personal data stored with us, we generally need time to verify this. For the duration of the verification process, you have the right to request the restriction of the processing of your personal data.</p>
      <p>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</p>
      <p>If we no longer need your personal data, but you require it for the establishment, exercise or defense of legal claims, you have the right to request restriction of processing of your personal data instead of erasure.</p>
      <p>If you have objected to processing pursuant to Article 21(1) GDPR, a balancing of interests between your interests and ours must be carried out. Until it is determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</p>
      <p>If you have restricted the processing of your personal data, this data - apart from being stored - may only be processed with your consent or for the establishment, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or of a Member State.</p>

      <h3>4. Data collection on this website</h3>
      <h4>Contact form</h4>
      <p>If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provided, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We will not share this data without your consent.</p>
      <p>The processing of this data is based on Article 6(1)(b) GDPR if your request is related to the performance of a contract or is necessary for taking steps prior to entering into a contract. In all other cases, the processing is based on our legitimate interest in the effective handling of inquiries addressed to us (Article 6(1)(f) GDPR) or on your consent (Article 6(1)(a) GDPR), if such consent has been obtained.</p>
      <p>The data you enter in the contact form will remain with us until you request its deletion, revoke your consent to its storage, or the purpose for data storage no longer applies (e.g., after your inquiry has been processed). Mandatory legal provisions - in particular, retention periods - remain unaffected.</p>

      <h4>Inquiries via email, telephone or fax</h4>
      <p>When you contact us by email, telephone, or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of handling your request. We will not share this data without your consent.</p>
      <p>The processing of this data is based on Article 6(1)(b) GDPR if your request is related to the performance of a contract or is necessary for taking steps prior to entering into a contract. In all other cases, the processing is based on our legitimate interest in the effective handling of inquiries addressed to us (Article 6(1)(f) GDPR) or on your consent (Article 6(1)(a) GDPR), if such consent has been obtained.</p>
      <p>The data you send us via contact requests will remain with us until you request its deletion, revoke your consent to its storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory legal provisions - in particular, statutory retention periods - remain unaffected.</p>
    `,
  },
};

const legalButtons = document.querySelectorAll("[data-legal-open]");

if (legalButtons.length) {
  const legalDialog = document.createElement("dialog");
  legalDialog.className = "legal-dialog";
  legalDialog.innerHTML = `
    <div class="legal-dialog-header">
      <h2 data-legal-title></h2>
      <button class="legal-dialog-close" type="button" aria-label="Close legal information" data-legal-close>&times;</button>
    </div>
    <div class="legal-dialog-body" data-legal-body></div>
  `;
  document.body.appendChild(legalDialog);

  const legalTitle = legalDialog.querySelector("[data-legal-title]");
  const legalBody = legalDialog.querySelector("[data-legal-body]");
  const legalClose = legalDialog.querySelector("[data-legal-close]");

  legalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = legalContent[button.dataset.legalOpen];
      if (!content || !legalTitle || !legalBody) return;

      legalTitle.textContent = content.title;
      legalBody.innerHTML = content.body;
      legalDialog.showModal();
    });
  });

  legalClose?.addEventListener("click", () => {
    legalDialog.close();
  });

  legalDialog.addEventListener("click", (event) => {
    if (event.target === legalDialog) {
      legalDialog.close();
    }
  });
}

const funnel = document.querySelector("[data-funnel]");

if (funnel) {
  const steps = [...funnel.querySelectorAll("[data-funnel-step]")];
  const backButton = funnel.querySelector("[data-funnel-back]");
  const nextButton = funnel.querySelector("[data-funnel-next]");
  const submitButton = funnel.querySelector("[data-funnel-submit]");
  const progress = funnel.querySelector("[data-funnel-progress]");
  const stepLabel = funnel.querySelector("[data-funnel-step-label]");
  const summary = funnel.querySelector("[data-funnel-summary]");
  const answers = {};
  let activeStep = 0;

  const labels = {
    "monthly-orders": "Monthly orders",
    "current-situation": "Current setup",
    "start-timing": "Start timing",
    "sales-channel": "Sales channel",
  };

  const updateSummary = () => {
    if (!summary) return;

    summary.innerHTML = Object.entries(labels)
      .map(([key, label]) => {
        const value = answers[key] || "Not selected";
        return `<div><span>${label}</span><strong>${value}</strong></div>`;
      })
      .join("");
  };

  const updateFunnel = () => {
    steps.forEach((step, index) => {
      step.classList.toggle("is-active", index === activeStep);
    });

    const currentStep = steps[activeStep];
    const stepName = currentStep?.dataset.stepName;
    const isContactStep = activeStep === steps.length - 1;
    const hasAnswer = isContactStep || Boolean(answers[stepName]);

    if (stepLabel) {
      stepLabel.textContent = `Step ${activeStep + 1} of ${steps.length}`;
    }

    if (progress) {
      progress.style.width = `${((activeStep + 1) / steps.length) * 100}%`;
    }

    if (backButton) {
      backButton.hidden = activeStep === 0;
    }

    if (nextButton) {
      nextButton.hidden = isContactStep;
      nextButton.disabled = !hasAnswer;
    }

    if (submitButton) {
      submitButton.hidden = !isContactStep;
    }

    if (isContactStep) {
      updateSummary();
    }
  };

  steps.forEach((step) => {
    const stepName = step.dataset.stepName;
    const input = funnel.querySelector(`[data-funnel-input="${stepName}"]`);

    step.querySelectorAll("[data-value]").forEach((card) => {
      card.addEventListener("click", () => {
        answers[stepName] = card.dataset.value;
        if (input) {
          input.value = card.dataset.value;
        }

        step.querySelectorAll("[data-value]").forEach((item) => {
          item.classList.toggle("is-selected", item === card);
        });

        updateFunnel();
      });
    });
  });

  nextButton?.addEventListener("click", () => {
    if (activeStep < steps.length - 1) {
      activeStep += 1;
      updateFunnel();
    }
  });

  backButton?.addEventListener("click", () => {
    if (activeStep > 0) {
      activeStep -= 1;
      updateFunnel();
    }
  });

  updateFunnel();
}
