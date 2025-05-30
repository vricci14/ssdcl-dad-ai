export function getNextQuestions(answers) {
  const next = [];

  // Step 1: Always start with app name and purpose
  if (!answers.appName) {
    next.push({ label: 'What is the name of the application?', key: 'appName' });
  } else if (!answers.purpose) {
    next.push({ label: 'What is the primary business purpose?', key: 'purpose' });
  } else if (!answers.dataType) {
    next.push({ label: 'What kind of data does the application handle?', key: 'dataType' });
  }

  // Step 2: Simulate GPT-style follow-ups
  if (answers.dataType) {
    const data = answers.dataType.toLowerCase();

    if (data.includes('pii') && !answers.piiEncryption) {
      next.push({ label: 'Is the PII encrypted at rest and in transit?', key: 'piiEncryption' });
    }

    if (data.includes('ssn') && !answers.ssnMasking) {
      next.push({ label: 'Is SSN masked in logs and UI?', key: 'ssnMasking' });
    }

    if (data.includes('credit card') && !answers.creditCardProtection) {
      next.push({ label: 'Is credit card data tokenized or encrypted?', key: 'creditCardProtection' });
    }

    if (data.includes('payment') && !answers.pciCompliance) {
      next.push({ label: 'Is the app PCI-DSS compliant?', key: 'pciCompliance' });
    }

    if (data.includes('health') && !answers.hipaaCompliance) {
      next.push({ label: 'Does the app fall under HIPAA compliance?', key: 'hipaaCompliance' });
    }
  }

  return next;
}
