const questions = [
  {
    id: 1,
    label: 'What is the name of the application?',
    key: 'appName',
    type: 'text',
  },
  {
    id: 2,
    label: 'What is the primary business purpose?',
    key: 'purpose',
    type: 'textarea',
  },
  {
    id: 3,
    label: 'What kind of data does the application handle?',
    key: 'dataType',
    type: 'textarea',
    triggers: [
      {
        keyword: 'pii',
        followUps: [
          {
            id: '3a',
            label: 'Is the PII encrypted at rest and in transit?',
            key: 'piiEncryption',
            type: 'text',
          },
          {
            id: '3b',
            label: 'Is PII shared with any third-party services?',
            key: 'piiSharing',
            type: 'text',
          },
        ],
      },
      {
        keyword: 'health',
        followUps: [
          {
            id: '3c',
            label: 'Does the application fall under HIPAA compliance?',
            key: 'hipaaCompliance',
            type: 'text',
          },
        ],
      },
      {
        keyword: 'payment',
        followUps: [
          {
            id: '3d',
            label: 'Does the application store or transmit credit card information?',
            key: 'paymentDataHandling',
            type: 'text',
          },
          {
            id: '3e',
            label: 'Is the application PCI-DSS compliant?',
            key: 'pciCompliance',
            type: 'text',
          },
        ],
      },
      {
        keyword: 'ssn',
        followUps: [
          {
            id: '3f',
            label: 'Is the SSN masked in logs and UI displays?',
            key: 'ssnMasking',
            type: 'text',
          },
        ],
      },
      {
        keyword: 'credit card',
        followUps: [
          {
            id: '3g',
            label: 'Is credit card data tokenized or encrypted?',
            key: 'creditCardProtection',
            type: 'text',
          },
        ],
      },
    ],
  },
];

export default questions;
