import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Makarios',

  projectId: '6w7ytxw4',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Daily Verse')
              .schemaType('dailyVerse')
              .child(S.documentTypeList('dailyVerse').title('Daily Verses')),
            S.divider(),
            S.listItem()
              .title('Video Courses')
              .schemaType('videoCourse')
              .child(S.documentTypeList('videoCourse').title('Video Courses')),
            S.listItem()
              .title('Lessons')
              .schemaType('lesson')
              .child(S.documentTypeList('lesson').title('Lessons')),
            S.divider(),
            S.listItem()
              .title('Prayers')
              .child(
                S.list()
                  .title('Prayers')
                  .items([
                    S.listItem()
                      .title('All Prayers')
                      .schemaType('prayer')
                      .child(S.documentTypeList('prayer').title('All Prayers')),
                    S.listItem()
                      .title('Categories')
                      .schemaType('prayerCategory')
                      .child(S.documentTypeList('prayerCategory').title('Prayer Categories')),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Bible Trivia')
              .child(
                S.list()
                  .title('Bible Trivia')
                  .items([
                    S.listItem()
                      .title('Questions')
                      .schemaType('triviaQuestion')
                      .child(S.documentTypeList('triviaQuestion').title('Trivia Questions')),
                    S.listItem()
                      .title('Books')
                      .schemaType('triviaBook')
                      .child(S.documentTypeList('triviaBook').title('Trivia Books')),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Testimonies')
              .schemaType('testimony')
              .child(S.documentTypeList('testimony').title('Testimonies')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
