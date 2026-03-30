import type { Block } from '@plentymarkets/shop-api';
import { v4 as uuid } from 'uuid';
import { createFooter } from '../footer/factory';

export function createHomepage(): Block[] {
  const banner1Pretitle = t('defaultTemplate.homepage.carousel.banner1.pretitle');
  const banner1Title = t('defaultTemplate.homepage.carousel.banner1.title');
  const banner1Description = t('defaultTemplate.homepage.carousel.banner1.description');
  const banner1ButtonLabel = t('defaultTemplate.homepage.carousel.banner1.buttonLabel');
  const banner2Pretitle = t('defaultTemplate.homepage.carousel.banner2.pretitle');
  const banner2Title = t('defaultTemplate.homepage.carousel.banner2.title');
  const banner2Description = t('defaultTemplate.homepage.carousel.banner2.description');
  const banner2ButtonLabel = t('defaultTemplate.homepage.carousel.banner2.buttonLabel');
  const welcomePretitle = t('defaultTemplate.homepage.textcard.welcome.pretitle');
  const welcomeTitle = t('defaultTemplate.homepage.textcard.welcome.title');
  const welcomeSubtitle = t('defaultTemplate.homepage.textcard.welcome.subtitle');
  const welcomeParagraph1 = t('defaultTemplate.homepage.textcard.welcome.paragraph1');
  const welcomeParagraph2 = t('defaultTemplate.homepage.textcard.welcome.paragraph2');
  const welcomeButtonLabel = t('defaultTemplate.homepage.textcard.welcome.buttonLabel');
  const welcomeDescription = `<p>${welcomeParagraph1}</p><p>${welcomeParagraph2}</p>`;
  const multigridTitle = t('defaultTemplate.homepage.multigrid.textcard.title');
  const multigridSubtitle = t('defaultTemplate.homepage.multigrid.textcard.subtitle');
  const multigridParagraph = t('defaultTemplate.homepage.multigrid.textcard.paragraph');
  const multigridFeature1 = t('defaultTemplate.homepage.multigrid.textcard.feature1');
  const multigridFeature2 = t('defaultTemplate.homepage.multigrid.textcard.feature2');
  const multigridFeature3 = t('defaultTemplate.homepage.multigrid.textcard.feature3');
  const multigridFeature4 = t('defaultTemplate.homepage.multigrid.textcard.feature4');
  const multigridButtonLabel = t('defaultTemplate.homepage.multigrid.textcard.buttonLabel');
  const multigridImageAlt = t('defaultTemplate.homepage.multigrid.image.alt');
  const multigridFeaturesList = [multigridFeature1, multigridFeature2, multigridFeature3, multigridFeature4]
    .map((feature) => `<li>${feature}</li>`)
    .join('');
  const multigridDescription = `<p>${multigridParagraph}</p><ul class='list-disc pl-4 mt-4 space-y-1'>${multigridFeaturesList}</ul>`;
  const fashionPretitle = t('defaultTemplate.homepage.productRecommended.fashion.pretitle');
  const fashionTitle = t('defaultTemplate.homepage.productRecommended.fashion.title');
  const fashionSubtitle = t('defaultTemplate.homepage.productRecommended.fashion.subtitle');
  const fashionLinkText = t('defaultTemplate.homepage.productRecommended.fashion.linkText');
  const fashionLinkUrl = t('defaultTemplate.homepage.productRecommended.fashion.linkUrl');
  const fashionDescription = `<a class='underline' href='${fashionLinkUrl}'>${fashionLinkText}</a>`;

  return [
    // Hero Banner Carousel with gradient backgrounds
    {
      name: 'Carousel',
      type: 'structure',
      meta: {
        uuid: uuid(),
      },
      configuration: {
        controls: {
          displayArrows: true,
          color: '#ffffff',
        },
      },
      content: [
        {
          name: 'Banner',
          type: 'content',
          meta: {
            uuid: uuid(),
            isGlobalTemplate: false,
          },
          content: {
            image: {
              wideScreen: '/images/banner-gradient.png',
              desktop: '/images/banner-gradient.png',
              tablet: '/images/banner-gradient.png',
              mobile: '/images/banner-gradient.png',
              alt: 'Ovatics – Vielfalt entdecken',
              brightness: 1,
            },
            text: {
              color: '#fff',
              bgcolor: '#1A1A1A',
              bgopacity: 0.7,
              pretitle: banner1Pretitle,
              title: banner1Title,
              htmlDescription: banner1Description,
              textAlignment: 'center',
              justify: 'center',
              align: 'center',
              background: true,
            },
            button: {
              label: banner1ButtonLabel,
              link: '/',
              variant: 'primary',
            },
          },
        },
        {
          name: 'Banner',
          type: 'content',
          meta: {
            uuid: uuid(),
            isGlobalTemplate: false,
          },
          content: {
            image: {
              wideScreen: '/images/banner-gradient2.png',
              desktop: '/images/banner-gradient2.png',
              tablet: '/images/banner-gradient2.png',
              mobile: '/images/banner-gradient2.png',
              alt: 'Ovatics – Premium Champagner & Spirits',
              brightness: 1,
            },
            text: {
              color: '#fff',
              bgcolor: '#202D89',
              bgopacity: 0.7,
              pretitle: banner2Pretitle,
              title: banner2Title,
              htmlDescription: banner2Description,
              textAlignment: 'center',
              justify: 'center',
              align: 'center',
              background: true,
            },
            button: {
              label: banner2ButtonLabel,
              link: '/champagner',
              variant: 'primary',
            },
          },
        },
      ],
    },

    // Welcome / Mission Statement
    {
      name: 'TextCard',
      type: 'content',
      meta: {
        uuid: uuid(),
        isGlobalTemplate: false,
      },
      content: {
        text: {
          htmlDescription: welcomeDescription,
          pretitle: welcomePretitle,
          title: welcomeTitle,
          subtitle: welcomeSubtitle,
          textAlignment: 'center',
          color: '#000',
        },
        button: {
          label: welcomeButtonLabel,
          link: '',
          variant: 'primary',
        },
      },
    },

    // Baby & Familie – Stock photo + text
    {
      name: 'MultiGrid',
      type: 'structure',
      meta: {
        uuid: uuid(),
        isGlobalTemplate: false,
      },
      configuration: {
        columnWidths: [6, 6],
      },
      content: [
        {
          name: 'Image',
          type: 'content',
          meta: {
            uuid: uuid(),
          },
          parent_slot: 0,
          content: {
            image: {
              wideScreen: '/images/stock-baby-family.jpg',
              desktop: '/images/stock-baby-family.jpg',
              tablet: '/images/stock-baby-family.jpg',
              mobile: '/images/stock-baby-family.jpg',
              alt: multigridImageAlt,
              imageAlignment: 'left',
            },
            text: {
              textOverlay: '',
              textOverlayColor: '',
              textOverlayAlignY: 'center',
              textOverlayAlignX: 'center',
            },
            button: {
              label: '',
              link: '',
              variant: 'primary',
            },
            layout: {
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        },
        {
          name: 'TextCard',
          type: 'content',
          meta: {
            uuid: uuid(),
          },
          parent_slot: 1,
          content: {
            text: {
              htmlDescription: multigridDescription,
              title: multigridTitle,
              subtitle: multigridSubtitle,
              textAlignment: 'left',
              color: '#000',
            },
            button: {
              label: multigridButtonLabel,
              link: '/baby',
              variant: 'primary',
            },
          },
        },
      ],
    },

    // Genuss & Lifestyle – Stock photo + text (reversed layout)
    {
      name: 'MultiGrid',
      type: 'structure',
      meta: {
        uuid: uuid(),
        isGlobalTemplate: false,
      },
      configuration: {
        columnWidths: [6, 6],
      },
      content: [
        {
          name: 'TextCard',
          type: 'content',
          meta: {
            uuid: uuid(),
          },
          parent_slot: 0,
          content: {
            text: {
              htmlDescription: fashionDescription,
              pretitle: fashionPretitle,
              title: fashionTitle,
              subtitle: fashionSubtitle,
              textAlignment: 'left',
              color: '#000',
            },
            button: {
              label: banner2ButtonLabel,
              link: '/champagner',
              variant: 'primary',
            },
          },
        },
        {
          name: 'Image',
          type: 'content',
          meta: {
            uuid: uuid(),
          },
          parent_slot: 1,
          content: {
            image: {
              wideScreen: '/images/stock-champagne.jpg',
              desktop: '/images/stock-champagne.jpg',
              tablet: '/images/stock-champagne.jpg',
              mobile: '/images/stock-champagne.jpg',
              alt: 'Champagner, Spirits & Genuss bei Ovatics',
              imageAlignment: 'right',
            },
            text: {
              textOverlay: '',
              textOverlayColor: '',
              textOverlayAlignY: 'center',
              textOverlayAlignX: 'center',
            },
            button: {
              label: '',
              link: '',
              variant: 'primary',
            },
            layout: {
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        },
      ],
    },

    // Footer (no newsletter)
    createFooter(),
  ];
}
