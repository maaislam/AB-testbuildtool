const countryData = [
  {
    name: 'Afghanistan',
    flag: 'https://protonvpn.com/images/flags/af.svg',
    servers: 5,
    cities: 1
  },
  {
    name: 'Albania',
    flag: 'https://protonvpn.com/images/flags/al.svg',
    servers: 15,
    cities: 1
  },
  {
    name: 'Algeria',
    flag: 'https://protonvpn.com/images/flags/dz.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Angola',
    flag: 'https://protonvpn.com/images/flags/ao.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Argentina',
    flag: 'https://protonvpn.com/images/flags/ar.svg',
    servers: 16,
    cities: 1
  },
  {
    name: 'Australia',
    flag: 'https://protonvpn.com/images/flags/au.svg',
    servers: 148,
    cities: 5
  },
  {
    name: 'Austria',
    flag: 'https://protonvpn.com/images/flags/at.svg',
    servers: 104,
    cities: 1
  },
  {
    name: 'Azerbaijan',
    flag: 'https://protonvpn.com/images/flags/az.svg',
    servers: 24,
    cities: 1
  },
  {
    name: 'Bahrain',
    flag: 'https://protonvpn.com/images/flags/bh.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Bangladesh',
    flag: 'https://protonvpn.com/images/flags/bd.svg',
    servers: 24,
    cities: 1
  },
  {
    name: 'Belarus',
    flag: 'https://protonvpn.com/images/flags/by.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Belgium',
    flag: 'https://protonvpn.com/images/flags/be.svg',
    servers: 70,
    cities: 1
  },
  {
    name: 'Bhutan',
    flag: 'https://protonvpn.com/images/flags/bt.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Bosnia & Herzegovina',
    flag: 'https://protonvpn.com/images/flags/ba.svg',
    servers: 10,
    cities: 1
  },
  {
    name: 'Brazil',
    flag: 'https://protonvpn.com/images/flags/br.svg',
    servers: 108,
    cities: 1
  },
  {
    name: 'Bulgaria',
    flag: 'https://protonvpn.com/images/flags/bg.svg',
    servers: 41,
    cities: 1
  },
  {
    name: 'Cambodia',
    flag: 'https://protonvpn.com/images/flags/kh.svg',
    servers: 12,
    cities: 1
  },
  {
    name: 'Canada',
    flag: 'https://protonvpn.com/images/flags/ca.svg',
    servers: 503,
    cities: 3
  },
  {
    name: 'Chad',
    flag: 'https://protonvpn.com/images/flags/td.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Chile',
    flag: 'https://protonvpn.com/images/flags/cl.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Colombia',
    flag: 'https://protonvpn.com/images/flags/co.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Comoros',
    flag: 'https://protonvpn.com/images/flags/km.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Costa Rica',
    flag: 'https://protonvpn.com/images/flags/cr.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Croatia',
    flag: 'https://protonvpn.com/images/flags/hr.svg',
    servers: 48,
    cities: 1
  },
  {
    name: 'Cyprus',
    flag: 'https://protonvpn.com/images/flags/cy.svg',
    servers: 10,
    cities: 1
  },
  {
    name: 'Czechia',
    flag: 'https://protonvpn.com/images/flags/cz.svg',
    servers: 55,
    cities: 1
  },
  {
    name: 'Côte d’Ivoire',
    flag: 'https://protonvpn.com/images/flags/ci.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Denmark',
    flag: 'https://protonvpn.com/images/flags/dk.svg',
    servers: 94,
    cities: 1
  },
  {
    name: 'Ecuador',
    flag: 'https://protonvpn.com/images/flags/ec.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Egypt',
    flag: 'https://protonvpn.com/images/flags/eg.svg',
    servers: 16,
    cities: 1
  },
  {
    name: 'El Salvador',
    flag: 'https://protonvpn.com/images/flags/sv.svg',
    servers: 53,
    cities: 1
  },
  {
    name: 'Eritrea',
    flag: 'https://protonvpn.com/images/flags/er.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Estonia',
    flag: 'https://protonvpn.com/images/flags/ee.svg',
    servers: 20,
    cities: 1
  },
  {
    name: 'Ethiopia',
    flag: 'https://protonvpn.com/images/flags/et.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Finland',
    flag: 'https://protonvpn.com/images/flags/fi.svg',
    servers: 41,
    cities: 1
  },
  {
    name: 'France',
    flag: 'https://protonvpn.com/images/flags/fr.svg',
    servers: 294,
    cities: 2
  },
  {
    name: 'Georgia',
    flag: 'https://protonvpn.com/images/flags/ge.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Germany',
    flag: 'https://protonvpn.com/images/flags/de.svg',
    servers: 482,
    cities: 2
  },
  {
    name: 'Ghana',
    flag: 'https://protonvpn.com/images/flags/gh.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Greece',
    flag: 'https://protonvpn.com/images/flags/gr.svg',
    servers: 64,
    cities: 1
  },
  {
    name: 'Hong Kong SAR China',
    flag: 'https://protonvpn.com/images/flags/hk.svg',
    servers: 42,
    cities: 1
  },
  {
    name: 'Hungary',
    flag: 'https://protonvpn.com/images/flags/hu.svg',
    servers: 24,
    cities: 1
  },
  {
    name: 'Iceland',
    flag: 'https://protonvpn.com/images/flags/is.svg',
    servers: 24,
    cities: 1
  },
  {
    name: 'India',
    flag: 'https://protonvpn.com/images/flags/in.svg',
    servers: 30,
    cities: 1
  },
  {
    name: 'Indonesia',
    flag: 'https://protonvpn.com/images/flags/id.svg',
    servers: 20,
    cities: 1
  },
  {
    name: 'Iraq',
    flag: 'https://protonvpn.com/images/flags/iq.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Ireland',
    flag: 'https://protonvpn.com/images/flags/ie.svg',
    servers: 49,
    cities: 1
  },
  {
    name: 'Israel',
    flag: 'https://protonvpn.com/images/flags/il.svg',
    servers: 14,
    cities: 2
  },
  {
    name: 'Italy',
    flag: 'https://protonvpn.com/images/flags/it.svg',
    servers: 74,
    cities: 2
  },
  {
    name: 'Japan',
    flag: 'https://protonvpn.com/images/flags/jp.svg',
    servers: 79,
    cities: 2
  },
  {
    name: 'Jordan',
    flag: 'https://protonvpn.com/images/flags/jo.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Kazakhstan',
    flag: 'https://protonvpn.com/images/flags/kz.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Kenya',
    flag: 'https://protonvpn.com/images/flags/ke.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Kuwait',
    flag: 'https://protonvpn.com/images/flags/kw.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Latvia',
    flag: 'https://protonvpn.com/images/flags/lv.svg',
    servers: 20,
    cities: 1
  },
  {
    name: 'Libya',
    flag: 'https://protonvpn.com/images/flags/ly.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Lithuania',
    flag: 'https://protonvpn.com/images/flags/lt.svg',
    servers: 56,
    cities: 2
  },
  {
    name: 'Luxembourg',
    flag: 'https://protonvpn.com/images/flags/lu.svg',
    servers: 40,
    cities: 1
  },
  {
    name: 'Malaysia',
    flag: 'https://protonvpn.com/images/flags/my.svg',
    servers: 36,
    cities: 2
  },
  {
    name: 'Malta',
    flag: 'https://protonvpn.com/images/flags/mt.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Mauritania',
    flag: 'https://protonvpn.com/images/flags/mr.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Mauritius',
    flag: 'https://protonvpn.com/images/flags/mu.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Mexico',
    flag: 'https://protonvpn.com/images/flags/mx.svg',
    servers: 76,
    cities: 2
  },
  {
    name: 'Moldova',
    flag: 'https://protonvpn.com/images/flags/md.svg',
    servers: 36,
    cities: 1
  },
  {
    name: 'Montenegro',
    flag: 'https://protonvpn.com/images/flags/me.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Morocco',
    flag: 'https://protonvpn.com/images/flags/ma.svg',
    servers: 33,
    cities: 1
  },
  {
    name: 'Mozambique',
    flag: 'https://protonvpn.com/images/flags/mz.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Myanmar (Burma)',
    flag: 'https://protonvpn.com/images/flags/mm.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Nepal',
    flag: 'https://protonvpn.com/images/flags/np.svg',
    servers: 52,
    cities: 1
  },
  {
    name: 'Netherlands',
    flag: 'https://protonvpn.com/images/flags/nl.svg',
    servers: 284,
    cities: 1
  },
  {
    name: 'New Zealand',
    flag: 'https://protonvpn.com/images/flags/nz.svg',
    servers: 33,
    cities: 1
  },
  {
    name: 'Nigeria',
    flag: 'https://protonvpn.com/images/flags/ng.svg',
    servers: 40,
    cities: 2
  },
  {
    name: 'North Macedonia',
    flag: 'https://protonvpn.com/images/flags/mk.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Norway',
    flag: 'https://protonvpn.com/images/flags/no.svg',
    servers: 56,
    cities: 1
  },
  {
    name: 'Oman',
    flag: 'https://protonvpn.com/images/flags/om.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Pakistan',
    flag: 'https://protonvpn.com/images/flags/pk.svg',
    servers: 12,
    cities: 1
  },
  {
    name: 'Peru',
    flag: 'https://protonvpn.com/images/flags/pe.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Philippines',
    flag: 'https://protonvpn.com/images/flags/ph.svg',
    servers: 12,
    cities: 1
  },
  {
    name: 'Poland',
    flag: 'https://protonvpn.com/images/flags/pl.svg',
    servers: 41,
    cities: 1
  },
  {
    name: 'Portugal',
    flag: 'https://protonvpn.com/images/flags/pt.svg',
    servers: 20,
    cities: 1
  },
  {
    name: 'Puerto Rico',
    flag: 'https://protonvpn.com/images/flags/pr.svg',
    servers: 8,
    cities: 1
  },
  {
    name: 'Qatar',
    flag: 'https://protonvpn.com/images/flags/qa.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Romania',
    flag: 'https://protonvpn.com/images/flags/ro.svg',
    servers: 50,
    cities: 1
  },
  {
    name: 'Russia',
    flag: 'https://protonvpn.com/images/flags/ru.svg',
    servers: 53,
    cities: 1
  },
  {
    name: 'Rwanda',
    flag: 'https://protonvpn.com/images/flags/rw.svg',
    servers: 27,
    cities: 1
  },
  {
    name: 'Saudi Arabia',
    flag: 'https://protonvpn.com/images/flags/sa.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Senegal',
    flag: 'https://protonvpn.com/images/flags/sn.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Serbia',
    flag: 'https://protonvpn.com/images/flags/rs.svg',
    servers: 48,
    cities: 1
  },
  {
    name: 'Singapore',
    flag: 'https://protonvpn.com/images/flags/sg.svg',
    servers: 30,
    cities: 1
  },
  {
    name: 'Slovakia',
    flag: 'https://protonvpn.com/images/flags/sk.svg',
    servers: 36,
    cities: 1
  },
  {
    name: 'Slovenia',
    flag: 'https://protonvpn.com/images/flags/si.svg',
    servers: 64,
    cities: 1
  },
  {
    name: 'Somalia',
    flag: 'https://protonvpn.com/images/flags/so.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'South Africa',
    flag: 'https://protonvpn.com/images/flags/za.svg',
    servers: 35,
    cities: 1
  },
  {
    name: 'South Korea',
    flag: 'https://protonvpn.com/images/flags/kr.svg',
    servers: 12,
    cities: 1
  },
  {
    name: 'South Sudan',
    flag: 'https://protonvpn.com/images/flags/ss.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Spain',
    flag: 'https://protonvpn.com/images/flags/es.svg',
    servers: 114,
    cities: 2
  },
  {
    name: 'Sri Lanka',
    flag: 'https://protonvpn.com/images/flags/lk.svg',
    servers: 52,
    cities: 1
  },
  {
    name: 'Sudan',
    flag: 'https://protonvpn.com/images/flags/sd.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Sweden',
    flag: 'https://protonvpn.com/images/flags/se.svg',
    servers: 152,
    cities: 1
  },
  {
    name: 'Switzerland',
    flag: 'https://protonvpn.com/images/flags/ch.svg',
    servers: 519,
    cities: 1
  },
  {
    name: 'Syria',
    flag: 'https://protonvpn.com/images/flags/sy.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Taiwan',
    flag: 'https://protonvpn.com/images/flags/tw.svg',
    servers: 20,
    cities: 2
  },
  {
    name: 'Tajikistan',
    flag: 'https://protonvpn.com/images/flags/tj.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Tanzania',
    flag: 'https://protonvpn.com/images/flags/tz.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Thailand',
    flag: 'https://protonvpn.com/images/flags/th.svg',
    servers: 36,
    cities: 1
  },
  {
    name: 'Togo',
    flag: 'https://protonvpn.com/images/flags/tg.svg',
    servers: 28,
    cities: 1
  },
  {
    name: 'Tunisia',
    flag: 'https://protonvpn.com/images/flags/tn.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Turkmenistan',
    flag: 'https://protonvpn.com/images/flags/tm.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Türkiye',
    flag: 'https://protonvpn.com/images/flags/tr.svg',
    servers: 36,
    cities: 1
  },
  {
    name: 'Ukraine',
    flag: 'https://protonvpn.com/images/flags/ua.svg',
    servers: 64,
    cities: 1
  },
  {
    name: 'United Arab Emirates',
    flag: 'https://protonvpn.com/images/flags/ae.svg',
    servers: 16,
    cities: 1
  },
  {
    name: 'United Kingdom',
    flag: 'https://protonvpn.com/images/flags/gb.svg',
    servers: 553,
    cities: 5
  },
  {
    name: 'United States',
    flag: 'https://protonvpn.com/images/flags/us.svg',
    servers: 2657,
    cities: 17
  },
  {
    name: 'Uzbekistan',
    flag: 'https://protonvpn.com/images/flags/uz.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Venezuela',
    flag: 'https://protonvpn.com/images/flags/ve.svg',
    servers: 119,
    cities: 1
  },
  {
    name: 'Vietnam',
    flag: 'https://protonvpn.com/images/flags/vn.svg',
    servers: 12,
    cities: 1
  },
  {
    name: 'Yemen',
    flag: 'https://protonvpn.com/images/flags/ye.svg',
    servers: 4,
    cities: 1
  },
  {
    name: 'Argentina',
    flag: 'https://protonvpn.com/images/flags/ar.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Australia',
    flag: 'https://protonvpn.com/images/flags/au.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Austria',
    flag: 'https://protonvpn.com/images/flags/at.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Belgium',
    flag: 'https://protonvpn.com/images/flags/be.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Brazil',
    flag: 'https://protonvpn.com/images/flags/br.svg',
    servers: 4,
    cities: 'N/A'
  },
  {
    name: 'Bulgaria',
    flag: 'https://protonvpn.com/images/flags/bg.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Cambodia',
    flag: 'https://protonvpn.com/images/flags/kh.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Canada',
    flag: 'https://protonvpn.com/images/flags/ca.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Chile',
    flag: 'https://protonvpn.com/images/flags/cl.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Colombia',
    flag: 'https://protonvpn.com/images/flags/co.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Costa Rica',
    flag: 'https://protonvpn.com/images/flags/cr.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Croatia',
    flag: 'https://protonvpn.com/images/flags/hr.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Cyprus',
    flag: 'https://protonvpn.com/images/flags/cy.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Czechia',
    flag: 'https://protonvpn.com/images/flags/cz.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Denmark',
    flag: 'https://protonvpn.com/images/flags/dk.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Ecuador',
    flag: 'https://protonvpn.com/images/flags/ec.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Egypt',
    flag: 'https://protonvpn.com/images/flags/eg.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Estonia',
    flag: 'https://protonvpn.com/images/flags/ee.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Finland',
    flag: 'https://protonvpn.com/images/flags/fi.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'France',
    flag: 'https://protonvpn.com/images/flags/fr.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'Georgia',
    flag: 'https://protonvpn.com/images/flags/ge.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Germany',
    flag: 'https://protonvpn.com/images/flags/de.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'Greece',
    flag: 'https://protonvpn.com/images/flags/gr.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Hong Kong SAR China',
    flag: 'https://protonvpn.com/images/flags/hk.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Hungary',
    flag: 'https://protonvpn.com/images/flags/hu.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'India',
    flag: 'https://protonvpn.com/images/flags/in.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'Indonesia',
    flag: 'https://protonvpn.com/images/flags/id.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Ireland',
    flag: 'https://protonvpn.com/images/flags/ie.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Israel',
    flag: 'https://protonvpn.com/images/flags/il.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Italy',
    flag: 'https://protonvpn.com/images/flags/it.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Japan',
    flag: 'https://protonvpn.com/images/flags/jp.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Latvia',
    flag: 'https://protonvpn.com/images/flags/lv.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Luxembourg',
    flag: 'https://protonvpn.com/images/flags/lu.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Malaysia',
    flag: 'https://protonvpn.com/images/flags/my.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Malta',
    flag: 'https://protonvpn.com/images/flags/mt.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Mexico',
    flag: 'https://protonvpn.com/images/flags/mx.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Moldova',
    flag: 'https://protonvpn.com/images/flags/md.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Myanmar (Burma)',
    flag: 'https://protonvpn.com/images/flags/mm.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Netherlands',
    flag: 'https://protonvpn.com/images/flags/nl.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'New Zealand',
    flag: 'https://protonvpn.com/images/flags/nz.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Nigeria',
    flag: 'https://protonvpn.com/images/flags/ng.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'North Macedonia',
    flag: 'https://protonvpn.com/images/flags/mk.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Norway',
    flag: 'https://protonvpn.com/images/flags/no.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Pakistan',
    flag: 'https://protonvpn.com/images/flags/pk.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Peru',
    flag: 'https://protonvpn.com/images/flags/pe.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Philippines',
    flag: 'https://protonvpn.com/images/flags/ph.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Poland',
    flag: 'https://protonvpn.com/images/flags/pl.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Portugal',
    flag: 'https://protonvpn.com/images/flags/pt.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'Puerto Rico',
    flag: 'https://protonvpn.com/images/flags/pr.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Romania',
    flag: 'https://protonvpn.com/images/flags/ro.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Russia',
    flag: 'https://protonvpn.com/images/flags/ru.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'Serbia',
    flag: 'https://protonvpn.com/images/flags/rs.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Singapore',
    flag: 'https://protonvpn.com/images/flags/sg.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Slovakia',
    flag: 'https://protonvpn.com/images/flags/sk.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Slovenia',
    flag: 'https://protonvpn.com/images/flags/si.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'South Africa',
    flag: 'https://protonvpn.com/images/flags/za.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'South Korea',
    flag: 'https://protonvpn.com/images/flags/kr.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Spain',
    flag: 'https://protonvpn.com/images/flags/es.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Taiwan',
    flag: 'https://protonvpn.com/images/flags/tw.svg',
    servers: 2,
    cities: 'N/A'
  },
  {
    name: 'Thailand',
    flag: 'https://protonvpn.com/images/flags/th.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Türkiye',
    flag: 'https://protonvpn.com/images/flags/tr.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'Ukraine',
    flag: 'https://protonvpn.com/images/flags/ua.svg',
    servers: 1,
    cities: 'N/A'
  },
  {
    name: 'United Arab Emirates',
    flag: 'https://protonvpn.com/images/flags/ae.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'United Kingdom',
    flag: 'https://protonvpn.com/images/flags/gb.svg',
    servers: 3,
    cities: 'N/A'
  },
  {
    name: 'United States',
    flag: 'https://protonvpn.com/images/flags/us.svg',
    servers: 5,
    cities: 'N/A'
  },
  {
    name: 'Vietnam',
    flag: 'https://protonvpn.com/images/flags/vn.svg',
    servers: 1,
    cities: 'N/A'
  }
];

export default countryData;
