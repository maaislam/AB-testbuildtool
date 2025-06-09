import setup from './services/setup';

const contents = {
  '/net-admin/mobile-device-management-software/': {
    1: {
      title: 'Kandji',
      content: 'Best for Apple-focused device management with automation and security compliance.'
    },
    2: {
      title: 'NinjaOne Mobile Device Management',
      content: 'Great for cloud-based MDM covering iOS and Android.'
    },
    3: {
      title: 'ManageEngine Mobile Device Manager Plus',
      content: 'Ideal for enterprise-grade MDM with cloud and on-premises options.'
    },
    4: {
      title: 'Ivanti Neurons for MDM',
      content: 'Suitable for mobile and desktop device management across platforms.'
    },
    5: {
      title: 'Citrix Endpoint Management',
      content: 'Good for virtualization-driven endpoint and mobile device control.'
    },
    6: {
      title: 'Scalefusion',
      content:
        'A strong option for cloud-based mobile management with onboarding and content hosting.'
    },
    7: {
      title: 'Samsung Knox Mobile',
      content: 'Best for affordable management of Samsung Android and ChromeOS devices.'
    },
    8: {
      title: 'Miradore Mobile Device Management',
      content: 'Good fit for multi-platform mobile device management.'
    },
    9: {
      title: 'Omnissa Workspace ONE',
      content: 'Useful for remote policy deployment and app distribution.'
    },
    10: {
      title: 'BlackBerry Unified Endpoint Management',
      content: 'Suitable for infrastructure monitoring, patching, and custom dashboards.'
    },
    11: {
      title: 'SureMDM',
      content: 'Best for mobile device security, content, and application management.'
    },
    12: {
      title: 'SOTI MobiControl',
      content: 'Good for endpoint management across Windows, iOS, and Android.'
    },
    13: {
      title: 'IBM MaaS360',
      content: 'Strong option for real-time data monitoring and endpoint security.'
    },
    14: {
      title: 'Cisco Meraki',
      content: 'Good choice for secure app delivery and loss protection on mobile devices.'
    },
    15: {
      title: 'Jamf Now',
      content: 'Best for simple cloud-based management of iOS devices.'
    }
  },
  '/net-admin/network-security-tools/': {
    1: {
      title: 'ManageEngine Vulnerability Manager Plus',
      content: 'Best for Windows environments needing vulnerability and patch management.'
    },
    2: {
      title: 'ManageEngine Log360',
      content: 'Great for SIEM, file integrity monitoring, and compliance reporting.'
    },
    3: {
      title: 'Site24x7',
      content: 'Ideal for cloud-based network security and configuration monitoring.'
    },
    4: {
      title: 'OSSEC',
      content: 'Suitable for teams needing free, open-source host intrusion detection.'
    },
    5: {
      title: 'CrowdStrike Falcon Insight',
      content: 'Good fit for cloud-native SIEM and endpoint detection.'
    },
    6: {
      title: 'SolarWinds Security Event Manager',
      content: 'A solid option for real-time log-based threat detection.'
    },
    7: {
      title: 'Intruder',
      content: 'Useful for automated cloud-based vulnerability scanning.'
    },
    8: {
      title: 'Endpoint Protector',
      content: 'Best for businesses focusing on endpoint data loss prevention.'
    },
    9: {
      title: 'Nessus Vulnerability Scanner',
      content: 'Strong choice for multi-platform vulnerability scanning.'
    },
    10: {
      title: 'ZAP (Zed Attack Proxy)',
      content: 'Ideal for free web application security testing.'
    },
    11: {
      title: 'Zscaler Cloud Firewall',
      content: 'Suitable for cloud-based firewall protection and access control.'
    },
    12: {
      title: 'Burp Suite',
      content: 'Recommended for penetration testers needing vulnerability scanning tools.'
    },
    13: {
      title: 'Teramind DLP',
      content: 'Good for businesses focused on data loss prevention and compliance monitoring.'
    }
  },
  '/net-admin/anti-spam-software/': {
    1: {
      title: 'Guardz',
      content: 'Best for MSPs needing cloud-based email and endpoint attack protection.'
    },
    2: {
      title: 'Mailwasher',
      content: 'Great free tool for blocking spam across multiple email clients.'
    },
    3: {
      title: 'ESET Protect Mail Plus',
      content:
        'Ideal for anti-spam, anti-phishing, and anti-malware in a SaaS or Windows Server setup.'
    },
    4: {
      title: 'TitanHQ SpamTitan',
      content:
        'Strong choice for filtering spam and phishing emails by analyzing headers and content.'
    },
    5: {
      title: 'Hornetsecurity Email Spam Filter',
      content: 'Suitable for cloud-based spam, malware, and DDoS protection.'
    },
    6: {
      title: 'SpamSieve',
      content: 'Good fit for Mac users needing adaptive email spam filtering.'
    },
    7: {
      title: 'Trustifi Inbound Shield',
      content: 'Useful for scanning inbound emails for malware and spam.'
    },
    8: {
      title: 'Comodo Dome Antispam',
      content: 'A potential option for edge-based email spam blocking.'
    },
    9: {
      title: 'MX Guarddog',
      content: 'Best for spam filtering with added phishing, malware, and DDoS protection.'
    },
    10: {
      title: 'SPAMfighter',
      content: 'Suitable for Outlook and Windows Mail users needing simple spam filtering.'
    },
    11: {
      title: 'ORF Fusion',
      content: 'Good choice for businesses wanting multi-layered spam detection.'
    },
    12: {
      title: 'Zerospam',
      content: 'Useful cloud-based spam and malware blocker with keyword scanning.'
    }
  },
  '/net-admin/rmm-software-and-tools/': {
    1: {
      title: 'NinjaOne RMM',
      content: 'Best for cloud-hosted remote monitoring and endpoint management.'
    },
    2: {
      title: 'Atera',
      content: 'Great for MSPs needing automated monitoring, patching, and ticketing.'
    },
    3: {
      title: 'Syncro',
      content: 'Best for smaller MSPs needing simple PSA and RMM with built-in billing.'
    },
    4: {
      title: 'SuperOps',
      content: 'Great for MSPs wanting modern, automation-driven PSA and RMM tools.'
    },
    5: {
      title: 'N-able N-sight',
      content: 'Great for remote monitoring with dashboard, NetPath, and network discovery.'
    },
    6: {
      title: 'Barracuda RMM',
      content: 'Best for security-focused RMM with optional Help Desk add-ons.'
    },
    7: {
      title: 'ManageEngine RMM Central',
      content: 'Good for hybrid deployments on Windows Server, AWS, or Azure.'
    },
    8: {
      title: 'ManageEngine Endpoint Central',
      content: 'Ideal for unified endpoint management with remote monitoring.'
    },
    9: {
      title: 'Site24x7 MSP Edition',
      content: 'Best for full cloud-based IT asset, server, and network monitoring.'
    },
    10: {
      title: 'GoTo Resolve',
      content: 'Suitable for remote access and basic automated monitoring via web console.'
    },
    11: {
      title: 'Paessler PRTG',
      content: 'Good fit for flexible monitoring with remote probes and full-stack observability.'
    },
    12: {
      title: 'Dameware Remote Everywhere',
      content: 'Useful for cloud-based remote support across computers and mobile devices.'
    },
    13: {
      title: 'TeamViewer Remote Management',
      content: 'Suitable for extending TeamViewer with monitoring functions.'
    },
    14: {
      title: 'ConnectWise Automate',
      content: 'Good option for RMM with autodiscovery, patching, and remote control.'
    },
    15: {
      title: 'Pulseway',
      content: 'Best for mobile-friendly RMM with automation, patch management, and alerts.'
    },
    16: {
      title: 'Kaseya VSA',
      content: 'Suitable for infrastructure monitoring, patching, and custom dashboards.'
    },
    17: {
      title: 'ITarian',
      content: 'A flexible RMM choice offering autodiscovery, reporting, and remote access.'
    }
  },
  '/net-admin/network-monitoring-tools/': {
    1: {
      title: 'Auvik',
      content: 'Ideal for fast cloud setup across multiple client networks.'
    },
    2: {
      title: 'Datadog Network Monitoring',
      content: 'Great choice for deep traffic and flow analytics in cloud environments.'
    },
    3: {
      title: 'Paessler PRTG Network Monitor',
      content: 'A strong option for fully customizable, hybrid network monitoring.'
    },
    4: {
      title: 'Domotz',
      content: 'Recommended for simple SaaS-based network and security monitoring.'
    },
    5: {
      title: 'Checkmk',
      content:
        'Perfect for organizations wanting customizable, open-source network and server monitoring.'
    },
    6: {
      title: 'NinjaOne RMM',
      content: 'A top pick for MSPs needing cloud-delivered network and endpoint management.'
    },
    7: {
      title: 'ManageEngine OpManager',
      content: 'Well-suited for monitoring SNMP devices, servers, and virtualized services.'
    },
    8: {
      title: 'Atera',
      content: 'Designed for IT teams and MSPs who need an all-in-one IT management solution.'
    },
    9: {
      title: 'Obkio',
      content: 'Excellent for monitoring LANs, internet performance, and VoIP connections.'
    },
    10: {
      title: 'Site24x7 Network Monitoring',
      content:
        'Great for monitoring infrastructure, applications, and user experience in one platform.'
    },
    11: {
      title: 'Fortra’s Intermapper',
      content: 'Good choice for automatic network mapping and live performance monitoring.'
    },
    12: {
      title: 'AdRem NetCrunch',
      content:
        'Best fit for Windows Server environments needing complete network and server monitoring.'
    },
    13: {
      title: 'Progress WhatsUp Gold',
      content:
        'A recommended option for on-premises core network device monitoring with performance add-ons.'
    },
    14: {
      title: 'ExtraHop Reveal(x)',
      content: 'Suitable for real-time network security monitoring and threat detection.'
    },
    15: {
      title: 'AKIPS',
      content: 'A potential fit for high-speed SNMP polling and NetFlow traffic analysis.'
    },
    16: {
      title: 'SuperOps',
      content:
        'Could be a good choice for lightweight, cloud-hosted RMM across networks and servers.'
    },
    17: {
      title: 'SolarWinds Network Performance Monitor',
      content: 'Might suit teams looking for automated network configuration monitoring.'
    },
    18: {
      title: 'Zabbix',
      content:
        'A solid open-source option for SNMP and IPMP-based network monitoring with strong community support.'
    },
    19: {
      title: 'Catchpoint Network Experience',
      content: 'Good for SaaS-based monitoring of web application delivery and performance.'
    },
    20: {
      title: 'Nagios Core',
      content: 'A flexible open-source choice for basic network monitoring with plugin extensions.'
    },
    21: {
      title: 'Icinga',
      content:
        'Suitable for users wanting open-source network monitoring with customization options.'
    }
  }
};

export default () => {
  setup();
  const path = window.location.pathname;
  const data = contents[path];

  if (!data) {
    console.warn('No content found for this path.');
    return;
  }
  console.log('🚀 ~ data:', data);

  Object.entries(data).forEach(([index, { title, content }]) => {
    const card = document.querySelector(`.CT245__card:nth-of-type(${index})`);
    if (!card) return;

    //Update title
    const titleEl = card.querySelector('.CT245__cardTitle, .title-text');
    if (titleEl) {
      titleEl.textContent = title;
    }

    //Update content
    const contentEl = card.querySelector('.content-details span');
    if (contentEl) {
      contentEl.textContent = content;
    }
  });
};
