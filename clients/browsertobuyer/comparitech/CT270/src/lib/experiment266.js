const experiment266 = () => {
  const pollerLite = (conditions, callback, maxTime = 15000) => {
    const POLLING_INTERVAL = 25;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const allConditionsMet = conditions.every((condition) => {
        if (typeof condition === 'function') {
          return condition();
        }
        return !!document.querySelector(condition);
      });
      if (allConditionsMet) {
        clearInterval(interval);
        callback();
      } else if (Date.now() - startTime >= maxTime) {
        clearInterval(interval);
        console.error('Polling exceeded maximum time limit');
      }
    }, POLLING_INTERVAL);
  };

  const trackGAEvent = (c, a, l) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'ga_event',
        event_category: c,
        event_action: a,
        event_label: l
      });
      console.log('event tracked', c, a, l);
    }
  };

  const medals = [
    'https://cdn-3.convertexperiments.com/uf/10021806/1002820/image-24_688066ff4b8e9.png',
    'https://cdn-3.convertexperiments.com/uf/10021806/1002820/image-25_688066f4832f6.png',
    'https://cdn-3.convertexperiments.com/uf/10021806/1002820/image-26_688066e64a56a.png'
  ];

  const logos = {
    Auvik:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/clip-path-group_688a17fd5ae23.png',
    Paessler: 'https://cdn-3.convertexperiments.com/uf/10021806/1002820/paesller_688a184417589.png',
    Domotz: 'https://cdn-3.convertexperiments.com/uf/10021806/1002820/domotz_688a185f51fe2.png',
    ManageEngine:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/manage-engine_688a18911590c.png',
    Site24x7:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/clip-path-group_688a18c5a8f89.png',
    'ManageEngine Log360':
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/manage-engine-logg-360_688a18e03c809.png',
    Guardz:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/clip-path-group_688a190787a71.png',
    'ESET Protect Mail Plus':
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/clip-path-group_688a19647edcf.png',
    Kandji:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/kandji-idd4tjvfuc-0-1_688a197f96303.png',
    NinjaOne:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/clip-path-group-1_688a19989bb12.png',
    'Files.com': 'https://cdn-3.convertexperiments.com/uf/10021806/1002820/files_688a19af85c68.png',
    ExaVault: 'https://cdn-3.convertexperiments.com/uf/10021806/1002820/exavault_688a19cf0ae0b.png',
    'Check Point':
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/clip-path-group-2_688a19e88523a.png',
    'eG Enterprise':
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/eg-innovations_688a1a131e6d3.png',
    'Progress WhatsUp':
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/progress-whats-up-gold-1_688a1a3718143.png',
    Syncro: 'https://syncromsp.com/wp-content/uploads/2024/09/Syncro-Logo.svg',
    SuperOps:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/super-ops_688a1a783249b.png',
    Mailwasher:
      'https://cdn-3.convertexperiments.com/uf/10021806/1002820/mail-washer_688a1a945f212.png'
  };

  const contents = {
    '/net-admin/mobile-device-management-software/': {
      2: {
        title: 'Kandji',
        content: 'Best for Apple-focused device management'
      },
      1: {
        title: 'NinjaOne Mobile Device Management',
        content: 'Best for cloud-based MDM covering iOS and Android'
      },
      3: {
        title: 'ManageEngine Mobile Device Manager Plus',
        content:
          'Best for companies who need an Enterprise-grade MDM with cloud and on-premises options'
      },
      4: {
        title: 'Ivanti Neurons for MDM',
        content: 'Best for mobile and desktop device management across platforms.'
      },
      5: {
        title: 'Citrix Endpoint Management',
        content: 'Best for virtualization-driven endpoint and mobile device control.'
      },
      6: {
        title: 'Scalefusion',
        content: 'Best for cloud-based mobile management with onboarding and content hosting.'
      },
      7: {
        title: 'Samsung Knox Mobile',
        content: 'Best for affordable management of Samsung Android and ChromeOS devices.'
      },
      8: {
        title: 'Miradore Mobile Device Management',
        content: 'Best for multi-platform mobile device management.'
      },
      9: {
        title: 'Omnissa Workspace ONE',
        content: 'Best for remote policy deployment and app distribution.'
      },
      10: {
        title: 'BlackBerry Unified Endpoint Management',
        content: 'Best for managing Windows, macOS, iOS, Android, and Chrome OS devices.'
      },
      11: {
        title: 'SureMDM',
        content: 'Best for mobile device security, content, and application management.'
      },
      12: {
        title: 'SOTI MobiControl',
        content: 'Best for endpoint management across Windows, iOS, and Android.'
      },
      13: {
        title: 'IBM MaaS360',
        content: 'Best for real-time data monitoring and endpoint security.'
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
        content: 'Best for vulnerability and patch management in Windows environments'
      },
      2: {
        title: 'ManageEngine Log360',
        content:
          'Best for larger businesses that need SIEM, file integrity monitoring, and compliance reporting'
      },
      3: {
        title: 'Site24x7',
        content: 'Best for cloud-based network security and configuration monitoring'
      },
      4: {
        title: 'OSSEC',
        content: 'Best for teams needing open-source host intrusion detection'
      },
      5: {
        title: 'CrowdStrike Falcon Insight',
        content: 'Best for businesses that need a scalable package'
      },
      6: {
        title: 'SolarWinds Permissions Analyzer for Active Directory',
        content: 'Best for large busineness with on-site networks'
      },
      7: {
        title: 'Intruder',
        content: 'Best for companies with higher budgets'
      },
      8: {
        title: 'Endpoint Protector',
        content: 'Best for businesses that store and use sensitive data'
      },
      9: {
        title: 'Nessus Vulnerability Scanner',
        content: 'Best for businesses poting for widely-adopted tools'
      },
      10: {
        title: 'ZAP',
        content: "Best for companies that don't need professional support"
      },
      11: {
        title: 'Zscaler Cloud Firewall',
        content: 'Best for businesses that need cloud-based firewall protection and access control'
      },
      12: {
        title: 'Burp Suite',
        content: 'Best for penetration testers'
      },
      13: {
        title: 'Teramind DLP',
        content: 'Best for businesses that store PII.'
      }
    },
    '/net-admin/anti-spam-software/': {
      1: {
        title: 'Guardz',
        content: 'Best for MSPs needing cloud-based email and endpoint attack protection'
      },
      2: {
        title: 'Mailwasher',
        content: 'Best for businesses that need to block spam across multiple email clients'
      },
      3: {
        title: 'ESET Protect Mail Plus',
        content: 'Best for Microsoft Exchange and IBM Domino systems'
      },
      4: {
        title: 'TitanHQ Email Security',
        content: 'Best for business with 25+ email accounts'
      },
      5: {
        title: 'Hornetsecurity Email Spam Filter and Malware Protection Service',
        content: 'Best for email filtering and data loss protection'
      },
      6: {
        title: 'SpamSieve',
        content: 'Best Mac-only businessess'
      },
      7: {
        title: 'Trustifi Inbound Shield',
        content: 'Best for medium to large businesses that need easily-used software'
      },
      8: {
        title: 'Comodo Dome Antispam',
        content: 'Best for edge-based email spam blocking'
      },
      9: {
        title: 'MX Guarddog',
        content: 'Best for spam filtering with added phishing, malware, and DDoS protection'
      },
      10: {
        title: 'SPAMfighter',
        content: 'Best for Outlook and Windows Mail users needing simple spam filtering'
      },
      11: {
        title: 'ORF Fusion',
        content: 'Best for businesses wanting multi-layered spam detection'
      },
      12: {
        title: 'Zerospam',
        content:
          'Best for businessess that need a cloud-based spam and malware blocker with keyword scanning'
      }
    },
    '/net-admin/rmm-software-and-tools/': {
      1: {
        title: 'NinjaOne RMM',
        content: 'Best for cloud-hosted remote monitoring and endpoint management'
      },
      2: {
        title: 'Atera',
        content: 'Best for MSPs needing automated monitoring, patching, and ticketing'
      },
      3: {
        title: 'Syncro',
        content: 'Best for smaller MSPs needing simple PSA and RMM with built-in billing'
      },
      4: {
        title: 'SuperOps',
        content: 'Best for MSPs managing lots of client systems or a very large network'
      },
      5: {
        title: 'N-able N-sight',
        content: 'Best for smaller MSPs and in-house teams'
      },
      10: {
        title: 'Barracuda RMM',
        content: 'Best for security-focused RMM with optional Help Desk add-ons'
      },
      6: {
        title: 'ManageEngine RMM Central',
        content: 'Best for hybrid deployments on Windows Server, AWS, or Azure'
      },
      7: {
        title: 'ManageEngine Endpoint Central',
        content: "Best for endpoint management where network monitoring isn't required"
      },
      8: {
        title: 'Site24x7 MSP Edition',
        content: 'Best for pricing based on number of assets under management'
      },
      9: {
        title: 'GoTo Resolve',
        content: 'Best choice for support teams'
      },
      11: {
        title: 'Paessler PRTG',
        content: 'Best choice for companies of all sizes with flexible options'
      },
      12: {
        title: 'Dameware Remote Everywhere',
        content: 'Best for businesses already using an RMM package without a remote access function'
      },
      13: {
        title: 'TeamViewer Remote Management',
        content: 'Best for businesses already using TeamViewer remote access'
      },
      14: {
        title: 'ConnectWise Automate',
        content: 'Best for larger companies'
      },
      15: {
        title: 'Pulseway',
        content: 'Best for mobile-friendly RMM with automation, patch management, and alerts'
      },
      16: {
        title: 'Kaseya VSA',
        content: 'Best for MSPs and IT departments managing 20+ endpoints'
      },
      17: {
        title: 'ITarian',
        content: 'Best for businesses following ITIL.'
      }
    },
    '/net-admin/network-monitoring-tools/': {
      1: {
        title: 'Auvik',
        content: 'Best for cloud-based monitoring across multiple sites'
      },
      2: {
        title: 'Datadog Network Monitoring',
        content: 'Best for centralized data centers'
      },
      3: {
        title: 'Paessler PRTG Network Monitor',
        content: 'Best for large organizations plus a free option for small businesses'
      },
      4: {
        title: 'Domotz',
        content: 'Best for MSPs and multiple site monitoring'
      },
      5: {
        title: 'Checkmk',
        content: 'Best for small businesses or startups'
      },
      6: {
        title: 'NinjaOne RMM',
        content: 'Best for MSPs needing cloud-based network and endpoint management'
      },
      7: {
        title: 'ManageEngine OpManager',
        content: 'Best choice for Linux users'
      },
      8: {
        title: 'Atera',
        content:
          'Best for large and small IT teams and MSPs who need an all-in-one IT management solution'
      },
      9: {
        title: 'Obkio',
        content: 'Best for operators of VoIP and video streaming'
      },
      10: {
        title: 'Site24x7 Network Monitoring',
        content: 'Best for monitoring web applications and sites'
      },
      11: {
        title: 'Fortra’s Intermapper',
        content: 'Best free tool with basic features plus paid plans'
      },
      12: {
        title: 'AdRem NetCrunch',
        content: 'Best for ease of use for small businessess'
      },
      13: {
        title: 'Progress WhatsUp Gold',
        content: 'Best for organizations with complex multi-site infrastructures'
      },
      14: {
        title: 'ExtraHop Reveal(x)',
        content: 'Best for mid and large sized companies that need a more complex solution'
      },
      15: {
        title: 'AKIPS',
        content: 'Best for users who monitor a single network'
      },
      16: {
        title: 'SuperOps',
        content: 'Best for MSPs that need to choose between RMM and PSA options'
      },
      17: {
        title: 'SolarWinds Network Performance Monitor',
        content: 'Best for teams looking for automated network configuration monitoring'
      },
      18: {
        title: 'Zabbix',
        content: 'Best for businesses that need an open-source option for Linux systems'
      },
      19: {
        title: 'Catchpoint Network Experience',
        content: 'Best for monitoring website performance, not networks'
      },
      20: {
        title: 'Nagios Core',
        content: 'Best for businesses that need to create their own monitoring application'
      },
      21: {
        title: 'Icinga',
        content: 'Best for network engineers with programming skills'
      }
    },
    '/net-admin/active-directory-tools/': {
      1: {
        title: 'ManageEngine ADManager Plus',
        content: 'Best for automating  user and group management'
      },
      2: {
        title: 'NinjaOne Active Directory Management',
        content: 'Best for MSPs'
      },
      3: {
        title: 'ManageEngine ADAudit Plus',
        content: 'Best for companies focused on compliance'
      },
      4: {
        title: 'SentinelOne Singularity Ranger AD',
        content: 'Best for scanning AD and Azure AD configurations for security weaknesses'
      },
      5: {
        title: 'Specops Command',
        content: 'Best for automating AD tasks via PowerShell and VBScript commands'
      },
      6: {
        title: 'Recovery Manager for Active Directory',
        content: 'Best for recovering AD objects without rebooting domain controllers.'
      },
      7: {
        title: 'ManageEngine Free Active Directory Tools',
        content: 'Best for users who want set of free tools'
      },
      8: {
        title: 'SolarWinds Permissions Analyzer for Active Directory',
        content: 'Best for visualizing AD group and file permissions'
      },
      9: {
        title: 'Netwrix Account Lockout Examiner',
        content: 'Best for diagnosing and investigating AD account lockouts'
      },
      10: {
        title: 'Bulk Password Control',
        content: 'Best for bulk password resets and policy enforcement in AD'
      },
      11: {
        title: 'Netwrix Inactive User Tracker',
        content: 'Best for identifying and cleaning up dormant AD accounts'
      }
    },
    '/data-privacy-management/best-hipaa-compliant-solutions/': {
      1: {
        title: 'Files.com',
        content: 'Best for HIPPA-compliant secure cloud file storage and transfers'
      },
      2: {
        title: 'ExaVault',
        content: 'Best for businesses with multiple sites and remote workers'
      },
      3: {
        title: 'Check Pointt’s SASE',
        content: 'Best for hybrid network security'
      },
      4: {
        title: 'Compliance Manager GRC',
        content: 'Best for automated HIPAA compliance tracking and documentation'
      },
      5: {
        title: 'GFI FaxMaker',
        content: 'Best for HIPAA-safe internet faxing'
      },
      6: {
        title: 'Sendinc',
        content: 'Best for encrypting emails'
      },
      7: {
        title: 'Mitel HIPAA-Compliant Phone Systems',
        content: 'Best for HIPAA-compliant VoIP and phone communications'
      },
      8: {
        title: 'Doxy.me',
        content: 'Best for simple, browser-based telemedicine video calls with PHI security'
      },
      9: {
        title: 'Tiger Connect',
        content: 'Best for secure, encrypted messaging via SMS in healthcare workflows'
      },
      10: {
        title: 'Carbonite',
        content: 'Best for automated cloud backup of PHI with HIPAA-friendly protocols'
      },
      11: {
        title: 'Paubox',
        content: 'Best for zero‑effort automatic secure email and encrypted forms'
      },
      12: {
        title: 'RingRx',
        content: 'Best for all-in-one secure fax, VoIP, chat, and video communications'
      },
      13: {
        title: 'UpDox',
        content: 'Best for clinical CRM combining secure messaging, records, and payment handling'
      }
    },
    '/net-admin/best-vm-monitoring-tools/': {
      1: {
        title: 'NinjaOne',
        content: 'Best for cloud‑based RMM with built‑in VMware and Hyper‑V VM monitoring.'
      },
      2: {
        title: 'Paessler PRTG Network Monitor',
        content: 'Best for full-stack monitoring including VMware, Hyper‑V, Citrix, and AWS EC2.'
      },
      3: {
        title: 'eG Enterprise VM Monitoring',
        content: 'Best for businesses who prefer pricing per physical server'
      },
      4: {
        title: 'Site24x7 Virtualization Monitoring',
        content: 'Best for flexible packages to suit both large and small businesses'
      },
      5: {
        title: 'ManageEngine OpManager',
        content: 'Best for small businesses'
      },
      6: {
        title: 'Acronis Cloud Manager',
        content: 'Best for performance tracking within Azure environments.'
      },
      7: {
        title: 'LogicMonitor',
        content: 'Best for customer support'
      },
      8: {
        title: 'Veeam One',
        content: 'Best for users who also need a backup system'
      },
      9: {
        title: 'Quest Foglight',
        content: 'Best for alerts for performance problems'
      },
      10: {
        title: 'Sematext Infrastructure Monitoring',
        content: 'Best for businesses who don’t need hypervisor monitoring'
      },
      11: {
        title: 'SolarWinds Virtualization Manager',
        content: 'Best for on‑prem VM monitoring with capacity planning and resource optimization'
      },
      12: {
        title: 'Progress WhatsUp Gold Virtualization Monitoring Add-on',
        content: 'Best for extending core network maps to include virtual servers'
      },
      13: {
        title: 'ESXi Embedded Host Client',
        content: 'Best for free, VMware-branded basic monitoring of ESXi hosts'
      },
      14: {
        title: 'Turbonomic',
        content:
          'Best for AI-driven hybrid cloud VM performance monitoring and automated remediation suggestions'
      }
    },
    '/net-admin/infrastructure-monitoring/': {
      1: {
        title: 'eG Enterprise IT Infrastructure Monitoring',
        content: 'Best for mid-sized businesses with on-premises and cloud-based resources.'
      },
      2: {
        title: 'Site24x7 Server Monitoring',
        content: 'Best for flexible cloud plans suitable for both small and large teams.'
      },
      3: {
        title: 'ManageEngine OpManager Plus',
        content: 'Best for businesses who want an all-in-one solution.'
      },
      4: {
        title: 'Netdata',
        content: 'Best for real-time infrastructure and application monitoring'
      },
      5: {
        title: 'Paessler PRTG Network Monitor',
        content: 'Best for sensor-based monitoring across network, server, and application layers.'
      },
      6: {
        title: 'Progress WhatsUp Gold',
        content: 'Best for mid-sized or large enterprises'
      },
      7: {
        title: 'Datadog Infrastructure Monitoring',
        content: 'Best for cloud-based monitoring'
      },
      8: {
        title: 'Nagios XI',
        content: 'Best for small businesses who want a free solution'
      },
      9: {
        title: 'SolarWinds Network Performance Monitor',
        content: 'Best for large and enterprise networks'
      },
      10: {
        title: 'N-able N-sight',
        content: 'Best for large MSPs'
      },
      11: {
        title: 'Zabbix',
        content: 'Best for users looking for an open-source option'
      },
      12: {
        title: 'Icinga 2',
        content: 'Best for companies who want to pay for support for an open-source tool'
      }
    },
    '/net-admin/aws-monitoring-services/': {
      0: {
        title: 'Progress WhatsUp Gold',
        content: 'Best for mid-sized or large enterprises'
      },
      1: {
        title: 'eG Enterprise AWS Monitoring',
        content: 'Best for users who want  simple setup with flexible add-ons'
      },
      2: {
        title: 'ManageEngine Applications Manager',
        content: 'Best for larger businesses'
      },
      3: {
        title: 'Site24x7 AWS Monitoring',
        content: 'Best for small businesses'
      },
      4: {
        title: 'Nagios XI',
        content: 'Best for mid-sized and large organizations'
      },
      5: {
        title: 'Paessler PRTG Network Monitor',
        content: 'Best for businesses who need flexible pricing by network size'
      },
      6: {
        title: 'Datadog AWS Monitoring',
        content: 'Best for users who want ‘per-host’ pricing'
      },
      7: {
        title: 'Dynatrace',
        content: 'Best for businesses with complicated applications which use microservices'
      },
      8: {
        title: 'AppDynamics',
        content: 'Best for complex enterprise environments'
      },
      9: {
        title: 'Zenoss',
        content: 'Best for users who want open-source option for AWS monitoring'
      },
      10: {
        title: 'Splunk',
        content: 'Best for more general data analysis tasks'
      },
      11: {
        title: 'Opsview',
        content: 'Best for monitoring both AWS and other infrastructure'
      },
      12: {
        title: 'Zabbix',
        content: 'Best for companies who want open-source monitoring with community support'
      }
    }
  };

  const shared = {
    ID: 'CT266',
    VARIATION: '1',
    CLIENT: 'browsertobuyer',
    SITE: 'comparitech'
  };
  convert.$(document).ready(() => {
    const { ID, VARIATION } = shared;
    const setup = () => {
      document.documentElement.classList.add(ID);
      document.documentElement.classList.add(`${ID}-${VARIATION}`);
    };
    const createListItemHTML = ({ rank, title, description, link, medalImg, logoImg }) => {
      return `
			<div style="display: flex; align-items: center; gap: 10px;">
			<img src="${medalImg}" alt="Medal ${rank}" width="24" height="24" />
			<img src="${logoImg}" alt="${title} Logo" style="max-height: 30px;" />
			</div>
			<strong><a href="${link}" target="_blank">${rank}. ${title}</a></strong><br />
			<span>– ${description}</span>
			<div>
			<a href="${link}" class="go-to-provider-button">Go to Provider ►</a>
			</div>
		`;
    };

    const test266 = () => {
      const ol = document.querySelector('.entry-content ol');
      if (!ol) return;

      const listItems = [...ol.querySelectorAll('li')];
      if (listItems.length < 4) return;

      const topThree = listItems.slice(0, 3);
      const rest = listItems.slice(3);

      const highlightBox = document.createElement('div');
      highlightBox.className = 'highlight-box';

      const topThreeOl = document.createElement('ol');
      topThreeOl.className = 'top-three';
      topThree.forEach((li, index) => {
        const rank = index + 1;
        const link = li.querySelector('a');
        const href = link?.href || '#';
        const serviceName = link?.textContent.trim();
        const getLogoUrl = (serviceTitle) => {
          if (!serviceTitle) return null;

          const lowerTitle = serviceTitle.toLowerCase();

          //Loop through logo keys and return the first one found in the title
          for (const key of Object.keys(logos)) {
            if (lowerTitle.includes(key.toLowerCase())) {
              return logos[key];
            }
          }

          return null;
        };

        //Create image wrapper
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'image-wrapper';

        //Medal image
        const medalImg = document.createElement('img');
        medalImg.src = medals[index];
        medalImg.alt = `Medal ${rank}`;
        medalImg.className = 'medal-img';

        //Logo image
        const logoImg = document.createElement('img');
        logoImg.src = getLogoUrl(serviceName);
        logoImg.alt = `${link?.textContent.trim() || 'Logo'}`;
        logoImg.className = 'logo-img';

        //Append images to wrapper
        imgWrapper.appendChild(medalImg);
        imgWrapper.appendChild(logoImg);

        //Insert wrapper at the top of the <li>
        li.insertBefore(imgWrapper, li.firstChild);

        const newWrapper = document.createElement('div');
        newWrapper.classList.add('new-wrapper');
        li.querySelector('.image-wrapper').insertAdjacentElement('afterend', newWrapper);

        const text = li.querySelector('.go-link').nextSibling;
        li.querySelector('.new-wrapper').appendChild(text);
        li.querySelector('.new-wrapper').insertAdjacentElement(
          'afterbegin',
          li.querySelector('.go-link')
        );
        li.querySelector('.new-wrapper a').insertAdjacentElement(
          'afterbegin',
          li.querySelector('.serial')
        );

        //"Go to Provider" button
        const providerConfig = {
          eG: 'eG Enterprise',
          Check: 'Check Point'
        };
        const providerName = serviceName ? serviceName.split(' ')[0] : 'Provider';
        const button = document.createElement('a');
        button.href = href;
        button.className = 'go-to-provider-button';
        button.textContent = `Go to ${providerConfig[providerName] || providerName} ►`;

        li.appendChild(button);

        //Optional tracking
        if (button) {
          button.addEventListener('click', () => {
            trackGAEvent('Top 3 Link Click', 'Top 3 Link Click', `Position clicked ${rank}`);
          });
        }

        if (link) {
          link.addEventListener('click', () => {
            trackGAEvent('Top 3 Link Click', 'Top 3 Link Click', `Position clicked ${rank}`);
          });
        }

        topThreeOl.appendChild(li);
      });
      highlightBox.appendChild(topThreeOl);

      const alsoBox = document.createElement('div');
      alsoBox.className = 'also-considering';

      const restOl = document.createElement('ol');
      restOl.className = 'remaining-items';
      restOl.start = 4;
      rest.forEach((li) => restOl.appendChild(li));
      alsoBox.appendChild(restOl);

      ol.replaceWith(highlightBox, alsoBox);
    };

    const activate = () => {
      const path = window.location.pathname;
      const data = contents[path];
      if (!data) {
        console.warn('No content found for this path.');
        return;
      }
      setup();
      const detailsContainer = document.querySelector('.post-details-container');
      const headline = document.getElementById('pagetitle');
      headline.insertAdjacentElement('afterend', detailsContainer);
      //console.log('🚀 ~ data:', data);

      const liElements = document.querySelectorAll('.entry-content ol > li');
      liElements.forEach((li, i) => {
        const array = Object.values(data);
        const entry = array[i];

        if (!entry) return;

        li.classList.add('list-item');
        const a = li.querySelector('a[href*="/go"]');
        const strong = li.querySelector('strong');
        let titleNode;
        let titleText;

        if (a) {
          //Remove all <span> inside <a> (e.g., trial badges)
          a.querySelectorAll('span').forEach((span) => span.remove());
          titleNode = a.outerHTML;
          titleText = a.textContent;
        } else {
          const b = li.querySelector('strong') || li.querySelector('b');
          titleNode = b ? `<b>${b.textContent.trim()}</b>` : '';
          titleText = b.textContent;
        }

        //Replace entire li content with cleaned title + new content
        //find content

        //console.log('title', titleNode);
        const newContent = array.find(
          (item) => item.title.toLowerCase() === titleText.toLowerCase().trim()
        );
        //console.log('newContent',newContent);
        if (newContent) {
          li.innerHTML = `<span class="serial">${i + 1}.</span>${titleNode} – ${
            newContent.content
          }`;
        } else {
          li.insertAdjacentHTML('afterbegin', `<span class="serial">${i + 1}.</span>`);
        }
      });
      const heroImage = document.querySelector('.entry-content > p:first-of-type:has(picture)');
      heroImage?.classList.add(`${ID}__hide`);
      test266();
      document.body.style.visibility = 'visible';
    };

    const validPages = [
      '/net-admin/network-monitoring-tools/',
      '/net-admin/network-security-tools/',
      '/net-admin/anti-spam-software/',
      '/net-admin/rmm-software-and-tools/',
      '/net-admin/mobile-device-management-software',
      '/net-admin/active-directory-tools/',
      '/data-privacy-management/best-hipaa-compliant-solutions/',
      '/net-admin/best-vm-monitoring-tools/',
      '/net-admin/infrastructure-monitoring/',
      '/net-admin/aws-monitoring-services/'
    ];

    if (validPages.some((page) => window.location.pathname.includes(page))) {
      pollerLite(['.entry-content ol '], activate);
      setTimeout(() => {
        const preHiddentElem = document.querySelector(
          `.entry-content>p:nth-of-type(1):not(.${ID}__hide)`
        );
        if (preHiddentElem && !document.querySelector(`.${ID}-1`)) {
          preHiddentElem.style.display = 'block';
          preHiddentElem.style.visibility = 'visible';
        }
        document.body.style.visibility = 'visible';
      }, 5000);
    }
  });
};

export default experiment266;
