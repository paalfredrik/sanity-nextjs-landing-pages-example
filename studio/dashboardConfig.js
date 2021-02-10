export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602391d0055255498060eddd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-example-studio',
                  apiId: '0d8a5e55-a609-4215-8da7-a6b0af1a0751'
                },
                {
                  buildHookId: '602391d003935c514927b55a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-example',
                  apiId: 'e903c4a9-be9c-435b-9005-d99415900c76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-nextjs-landing-pages-example',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-example.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
