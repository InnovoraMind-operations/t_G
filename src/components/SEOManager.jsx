import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import { servicesData } from '../data/servicesData';

const BASE_URL = 'https://www.techryonglobal.com';

export const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    let title = 'Techryon Global | Enterprise IT Consultancy & Global Tech Summits';
    let description =
      'Engineering the Future of Technology. Techryon Global delivers enterprise IT consultancy, AI implementation, and cloud engineering, while hosting premier international tech summits and global hackathons.';
    let canonicalUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;
    let schemaData = null;

    // Breadcrumb helper
    const makeBreadcrumb = (items) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    });

    if (pathname === '/') {
      title = 'Techryon Global | Enterprise IT Consultancy & Global Tech Summits';
      description =
        'Engineering the Future of Technology. Techryon Global delivers enterprise IT consultancy, AI implementation, and cloud engineering, while hosting premier international tech summits and global hackathons.';
      schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${BASE_URL}/#organization`,
            name: 'Techryon Global',
            legalName: 'Techryon Global',
            url: `${BASE_URL}/`,
            logo: `${BASE_URL}/tg-logo.png`,
            description:
              'Enterprise IT consultancy and premier organizer of international technical summits, hackathons, and research forums.',
            email: 'inquiries@techryonglobal.com',
            sameAs: ['https://www.linkedin.com/company/113171257'],
          },
          {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
            url: `${BASE_URL}/`,
            name: 'Techryon Global',
            publisher: { '@id': `${BASE_URL}/#organization` },
          },
        ],
      };
    } else if (pathname === '/services') {
      title = 'Enterprise IT Consultancy & Technology Services | Techryon Global';
      description =
        'Accelerate enterprise digital capability with Techryon Global: Full-Stack Web Development, Data Science Pipelines, Applied AI/ML, Cloud Architecture, and Cybersecurity.';
      schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          makeBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ],
      };
    } else if (pathname.startsWith('/services/')) {
      const serviceId = pathname.replace('/services/', '');
      const service = servicesData.find((s) => s.id === serviceId);

      if (service) {
        title = `${service.title} Services | Techryon Global Enterprise Solutions`;
        description = `${service.title} by Techryon Global: ${service.overview.slice(0, 140)}...`;
        schemaData = {
          '@context': 'https://schema.org',
          '@graph': [
            makeBreadcrumb([
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: service.title, path: pathname },
            ]),
            {
              '@type': 'Service',
              name: service.title,
              description: service.overview,
              provider: {
                '@type': 'Organization',
                name: 'Techryon Global',
                url: BASE_URL,
              },
              areaServed: 'Worldwide',
            },
          ],
        };
      }
    } else if (pathname === '/events') {
      title = 'Global Technical Conferences & Summits 2026 | Techryon Global';
      description =
        'Explore upcoming international technical conferences, research summits, and virtual hackathons organized and hosted worldwide by Techryon Global.';
      schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          makeBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Events', path: '/events' },
          ]),
        ],
      };
    } else if (pathname.startsWith('/events/')) {
      const eventSlug = pathname.replace('/events/', '');
      const event = eventsData.find(
        (e) =>
          e.slug === eventSlug ||
          e.id === eventSlug ||
          (eventSlug === 'innovation-forum-hackathon-2026' && e.id === 'evt_012') ||
          (eventSlug === 'industrial-hackathon-2026' && e.id === 'evt_012')
      );

      if (event) {
        if (event.id === 'evt_012') {
          title = 'Industrial Hackathon 2026 | TechryonGlobal Smart Manufacturing';
          description =
            'TechryonGlobal Industrial Hackathon 2026: 100% free international online virtual hackathon on Industry 5.0, Smart Manufacturing, Industrial AI, and Digital Twins. Register now!';
        } else if (event.id === 'evt_013') {
          title = 'ICCINT 2026 Conference | Techryon Global Connected Intelligence';
          description =
            'Official International Conference on Connected Intelligence and Next-Generation Technologies (ICCINT 2026) organized by Techryon Global. Hybrid event on August 9, 2026.';
        } else {
          title = `${event.title.length > 38 ? event.title.slice(0, 38) + '...' : event.title} | Techryon Global`;
          description = `${event.title} - ${event.overview ? event.overview.slice(0, 130) : 'Organized by Techryon Global.'}...`;
        }

        schemaData = {
          '@context': 'https://schema.org',
          '@graph': [
            makeBreadcrumb([
              { name: 'Home', path: '/' },
              { name: 'Events', path: '/events' },
              { name: event.title, path: pathname },
            ]),
            {
              '@type': event.id === 'evt_012' ? 'Hackathon' : 'Event',
              name: event.title,
              description: event.overview,
              startDate:
                event.id === 'evt_012'
                  ? '2026-09-27T09:00:00+00:00'
                  : event.id === 'evt_013'
                  ? '2026-08-09T09:00:00+00:00'
                  : '2026-01-01T09:00:00+00:00',
              endDate:
                event.id === 'evt_012'
                  ? '2026-09-28T18:00:00+00:00'
                  : event.id === 'evt_013'
                  ? '2026-08-09T18:00:00+00:00'
                  : '2026-01-02T18:00:00+00:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: event.format.toLowerCase().includes('hybrid')
                ? 'https://schema.org/MixedEventAttendanceMode'
                : 'https://schema.org/OnlineEventAttendanceMode',
              isAccessibleForFree: event.id === 'evt_012',
              location: event.format.toLowerCase().includes('virtual')
                ? {
                    '@type': 'VirtualLocation',
                    url: canonicalUrl,
                  }
                : {
                    '@type': 'Place',
                    name: event.location,
                  },
              organizer: {
                '@type': 'Organization',
                name: 'Techryon Global',
                url: BASE_URL,
                logo: `${BASE_URL}/tg-logo.png`,
              },
              url: canonicalUrl,
            },
          ],
        };
      }
    } else if (pathname === '/about') {
      title = 'About Techryon Global | Leadership & Engineering Philosophy';
      description =
        'Learn about Techryon Global: our mission, core values of algorithmic precision & zero-trust architecture, and our international executive leadership team.';
      schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          makeBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
          ]),
        ],
      };
    } else if (pathname === '/advisory-board') {
      title = 'International Advisory Board | Techryon Global Academic Network';
      description =
        'Meet the distinguished international professors, scientists, and researchers advising Techryon Global on research excellence and global conference governance.';
      schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          makeBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Advisory Board', path: '/advisory-board' },
          ]),
        ],
      };
    } else if (pathname === '/contact') {
      title = 'Contact Techryon Global | Enterprise IT & Summit Inquiries';
      description =
        'Get in touch with Techryon Global for enterprise IT consulting, conference sponsorships, keynote speaker submissions, or hackathon inquiries.';
      schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          makeBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Contact Us', path: '/contact' },
          ]),
        ],
      };
    }

    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName] = selector.replace(/[\[\]"']/g, '').split('=');
        element.setAttribute(attrName, selector.split('=')[1].replace(/["']/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="title"]', 'content', title);

    // 4. Update OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

    // 5. Update Twitter Tags
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl);

    // 6. Update Canonical Link Element
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 7. Update Dynamic JSON-LD Structured Data
    if (schemaData) {
      let scriptTag = document.getElementById('dynamic-seo-ld');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-seo-ld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    }
  }, [location.pathname]);

  return null;
};

export default SEOManager;
