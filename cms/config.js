export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'shaunmaharaj/ic-ent-shop-store',
      branch: 'master',
    },
    media_folder: 'public/img',
    public_folder: 'img',  
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: 'Home',
            name: 'home',
            file: 'content/pages/home.md',
            fields: [
              {
                label: 'Hero Title',
                name: 'hero_title',
                widget: 'string',
              },
              {
                label: 'Hero Description',
                name: 'hero_description',
                widget: 'markdown',
              },
              {
                label: 'Hero Image',
                name: 'hero_image',
                widget: 'file'
              },
            ],
          },
          {
            label: 'Three Grid Container',
            name: 'three grid container',
            file: 'content/pages/3_grid_container.md',
            fields: [
              {
                label: 'Title',
                name: 'title',
                widget: 'string',
              },
              {
                label: 'Description 1',
                name: 'description1',
                widget: 'markdown',
              },
              {
                label: 'Image 1',
                name: 'image1',
                widget: 'image'
              },
              {
                label: 'Description 2',
                name: 'description2',
                widget: 'markdown',
              },
              {
                label: 'Image 2',
                name: 'image2',
                widget: 'image'
              },
              {
                label: 'Description 3',
                name: 'description3',
                widget: 'markdown',
              },
              {
                label: 'Image 3',
                name: 'image3',
                widget: 'image'
              },
            ],
          },
          {
            label: 'Secondary Home',
            name: 'secondaryhome',
            file: 'content/pages/secondary_home.md',
            fields: [
              {
                label: 'Secondary Hero Title',
                name: 'secondary_hero_title',
                widget: 'string',
              },
              {
                label: 'Secondary Hero Description',
                name: 'secondary_hero_description',
                widget: 'markdown',
              },
              {
                label: 'Secondary Hero Image',
                name: 'secondary_hero_image',
                widget: 'file'
              },
            ],
          },
        ],
      },
    ],
  };