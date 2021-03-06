import { storiesOf } from '@storybook/vue';
import PageHeader from '@/components/layout/PageHeader';

storiesOf('Layout/PageHeader', module)
  .add('basic', () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Page title" description="Modernipsum dolor sit amet nouveau realisme divisionism." />
    `,
  }))
  .add('with actions', () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Page title" description="Modernipsum dolor sit amet nouveau realisme divisionism.">
        <z-button slot="secondary-action" secondary>Cancel</z-button>
        <z-button slot="primary-action">Save</z-button>
      </PageHeader>
    `,
  }))
  .add('with actions & no description', () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Page title">
        <z-button slot="secondary-action" secondary>Cancel</z-button>
        <z-button slot="primary-action">Save</z-button>
      </PageHeader>
    `,
  }));
