const newPriductData = {
  serveurs: [
    {
      id: 1,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat-5-Conf-10%E2%80%93+A4510.png',
      title: 'A4510 HPE Apollo 4510 Gen10 (Cat2 Conf10) - Expert',
      pdfLink: 'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat2Conf10A4510.pdf',
      specList: [
        '1|864668-B21|HPE Apollo 4510 Gen10 Configure-to-Order Chassis',
        '1|864625-B21|HPE ProLiant XL450 Gen10 Configure-to-order Server Node for Apollo 4510 Gen10 Chassis',
        '1|P19706-L21|Intel Xeon-Silver 4210R (2.4GHz/10-core/100W) FIO Processor Kit for HPE ProLiant XL450 Gen10'
      ],
      price: 'EUR HT 4954,95'
    },
    {
      id: 2,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat2-Conf15-SD-Flex-280.png',
      title: 'HPE SD Flex 280 (Cat2 Conf15) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat2Conf15SDFlex280.pdf',
      specList: [
        '1|M0S66A|HPE Virtual Rack',
        '1|R4R03A|HPE Superdome Flex 280 4-socket Base Chassis',
        '2|R6A25A|Intel Xeon-Gold 5318H (2.5GHz/18-core/150W) Processor Kit for HPE Superdome Flex 280'
      ],
      price: 'EUR HT 11 957,90'
    },
    {
      id: 3,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat3-Conf1-Apollo2000-Gen10.png',
      title: 'Apollo 2000 Gen10 HPE Apollo 2000 XL170r Gen10 (Cat3 Conf1) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat3Conf1Apollo2000Gen10.pdf',
      specList: [
        '1|867156-B21|HPE Apollo r2200 Gen10 12 LFF Configure-to-order Chassis',
        '4|867055-B21|HPE ProLiant XL170r Gen10 1U Node Configure-to-order Server',
        '4|P19266-L21|Intel Xeon-Silver 4214R (2.4GHz/12-core/100W) FIO Processor Kit for HPE ProLiant XL1x0r Gen10'
      ],
      price: 'EUR HT 7 381,50'
    },
    {
      id: 4,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat3-Conf8-A2000-G10p-Chassis.png',
      title: 'A2000 G10p Chassis HPE Apollo 2000 Gen10+ Chassis (Cat3 Conf8) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat3Conf8A2000G10pChassis.pdf',
      specList: [
        '1|P19878-B21|HPE Apollo n2600 Gen10 Plus Small Form Factor Configure-to-order Chassis',
        '2|830272-B21|HPE 1600W Flex Slot Platinum Hot Plug Low Halogen Power Supply Kit',
        '1|P20279-B21|HPE n2x00 Gen10 Plus Fan Kit'
      ],
      price: 'EUR HT 1 460,54'
    },
    {
      id: 5,
      imageSrc: 'https://b2b.hpe.com/static/kfMsXwUj0CsxzxHVWowMvBbf5IRw7fs6WeSVuuiliwI.png',
      title: 'A2k Lame 2U Intel HPE Apollo 2000 XL290n Gen10+ (Cat3 Conf10) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat3Conf10A2kLame2UIntel.pdf',
      specList: [
        '1|P19880-B21|HPE ProLiant XL290n Gen10 Plus 2U Node Configure-to-order Server',
        '1|P36797-B21|Intel Xeon-Silver 4314 2.4GHz 16-core 135W Processor Kit for HPE ProLiant XL2x0n Gen10 Plus',
        '1|P36797-L21|Intel Xeon-Silver 4314 2.4GHz 16-core 135W FIO Processor Kit for HPE ProLiant XL2x0n Gen10 Plus'
      ],
      price: 'EUR HT 2 337,15'
    },
    {
      id: 6,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat3-Conf4-A6500-HGX-4xGPUs.png',
      title: 'A6500 HGX 4xGPUs HPE Apollo 6500 XL645d Gen10+ HGX (Cat3 Conf4) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat3Conf4A6500HGX4xGPUs.pdf',
      specList: [
        '1|P27769-B21|HPE XL645d Gen10+ Mod GPU Tray',
        '1|P25872-B21|HPE Apollo 6500 Gen10+ Mod GPU BP Kit',
        '1|P19674-B21|HPE Apollo d6500 Gen10 Plus Configure-to-order Chassis'
      ],
      price: 'EUR HT 44 259,04'
    },
    {
      id: 7,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat3-Conf6-A6500.png',
      title: 'A6500 HGX 8xGPUs HPE Apollo 6500 XL675d Gen10+ HGX (Cat3 Conf7) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat3Conf7A6500HGX8xGPUs.pdf',
      specList: [
        '1|P25668-B21|HPE XL675d Gen10 Plus Modular Accelerator Tray',
        '1|P19725-B21|HPE ProLiant XL675d Gen10 Plus Configure-to-order Server',
        '2|P27264-B21|AMD EPYC 7262 3.2GHz 8-core 155W Processor Kit for HPE Apollo 6500 Gen10 Plus'
      ],
      price: 'EUR HT 79 791,40'
    },
    {
      id: 8,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat3-Conf5-A6500-XL645d-PCI.png',
      title: 'A6500 XL645d PCI HPE Apollo 6500 XL645d Gen10+ PCI (Cat3 Conf5) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat3Conf5A6500XL645dPCI.pdf',
      specList: [
        '1|P29092-B21|HPE XL645d Gen10 Plus PCIe Accelerator Interposer Kit',
        '1|P31664-B21|HPE Apollo 6500 Gen10+ PCIe GPU NPS Kit',
        '1|P19674-B21|HPE Apollo d6500 Gen10 Plus Configure-to-order Chassis'
      ],
      price: 'EUR HT 11 122,70'
    },
    {
      id: 9,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat3-Conf6-A6500.png',
      title: 'A6500 XL675d PCI HPE Apollo 6500 XL675d Gen10+ PCI (Cat3 Conf6) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat3Conf6A6500XL675dPCI.pdf',
      specList: [
        '1|P25887-B21|HPE XL675d Gen10 Plus 10 Double Wide PCIe and 16 Single Wide PCIe Accelerator Tray',
        '1|P19725-B21|HPE ProLiant XL675d Gen10 Plus Configure-to-order Server',
        '2|P27264-B21|AMD EPYC 7262 3.2GHz 8-core 155W Processor Kit for HPE Apollo 6500 Gen10 Plus'
      ],
      price: 'EUR HT 16 942,80'
    }
  ],
  synergy: [
    {
      id: 1,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat4-Conf1-Synergy-Chassis.png',
      title: 'Synergy Chassis HPE Synergy 12000 (Cat4 Conf1) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat4Conf1SynergyChassis.pdf',
      specList: [
        '1|P06011-B21|HPE Synergy 12000 Configure-to-order Frame with 10x Fans',
        '2|798095-B21|HPE 2650W Performance Hot Plug Titanium Plus Power Supply Kit',
        '1|804938-B21|HPE Synergy Frame Rack Rail Kit'
      ],
      price: 'EUR HT 2 824,50'
    },
    {
      id: 2,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat4-Conf1-SY660-Gen10.png',
      title: 'SY660 Gen10 HPE Synergy 660 Gen10 (Cat4 Conf3) - Expert',
      pdfLink:
        'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat4Conf3SY660Gen10.pdf',
      specList: [
        '1|871929-B21|HPE Synergy 660 Gen10 Configure-to-order Compute Modules',
        '1|P07336-L21|Intel Xeon-Gold 5215 (2.5GHz/10-core/85W) FIO Processor Kit for HPE Synergy 480/660 Gen10.',
        '1|P07336-B21|Intel Xeon-Gold 5215 (2.5GHz/10-core/85W) FIO Processor Kit for HPE Synergy 480/660 Gen10.'
      ],
      price: 'EUR HT 2 837,10'
    }
  ],
  stockage: [
    {
      id: 1,
      imageSrc:
        'https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+Matinfo+-+Customer+Experience/Cat-5-Conf2-MSA.png',
      title: 'MSA1060 (Cat5 Conf2) - Expert',
      pdfLink: 'https://b2b.hpe.com/navigation/openContactPDF?fileName=MatinfoCat5Conf2MSA.pdf',
      specList: [
        '1|R0Q87A|HPE MSA 1060 12Gb SAS SFF Strg',
        '12|R0Q55A|HPE MSA 1.2TB SAS 10K SFF M2 HDD',
        '1|AG466A|HPE Door/Dock Small Logistic Service'
      ],
      price: 'EUR HT 5 068,35'
    }
  ]
};
