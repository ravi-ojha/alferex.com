<script lang="ts">
  import { Accordion } from 'bits-ui'
  import CaretDown from 'phosphor-svelte/lib/CaretDown'

  const faqs = [
    {
      value: '1',
      title: 'Why no per-seat pricing?',
      content:
        "Because Ticketping works within Slack, teammates naturally join in for collaboration. You shouldn't pay extra for that. Flat pricing keeps it fair and easy to budget."
    },
    {
      value: '2',
      title: 'What if we go slightly over the recommended ticket range?',
      content:
        "No worries — the limits are soft guidelines to help you pick the right plan. We don't charge per ticket. If your volume consistently stays well above the recommended range, we'll simply suggest moving to the next tier."
    },
    {
      value: '3',
      title: 'How do reply to a ticket via Slack?',
      content:
        'Just mention <span class="font-mono text-sand-700 dark:text-cement-300">@Ticketping</span> in the thread and type your response. You can also reply from the dashboard if you prefer.'
    },
    {
      value: '4',
      title: "How do I ensure internal Slack discussions aren't shared with customers?",
      content:
        'Only messages that start with <span class="font-mono text-sand-700 dark:text-cement-300">@Ticketping</span> are sent to customers. Everything else in the thread stays private to your team.'
    },
    {
      value: '5',
      title: 'Can I get a demo?',
      content:
        'Sure thing! Schedule a demo with me <a href="https://cal.com/ravi-ojha/ticketping-demo" target="_blank" class="text-sand-600 dark:text-cement-400 mb-1 border-b border-sand-200 dark:border-cement-800 hover:border-parrot-600 dark:hover:border-parrot-500 hover:text-parrot-600 dark:hover:text-parrot-500">here</a>.'
    },
    {
      value: '6',
      title: 'Can I cancel anytime?',
      content:
        'Absolutely. Ticketping is a month-to-month subscription with no long-term lock-ins. You can cancel anytime from your dashboard, and your plan will stay active until the end of the billing period.'
    },
    {
      value: '7',
      title: 'Where is my data hosted?',
      content:
        'Your data is securely hosted in the United States. Our frontend runs on Vercel, while the backend and all stored data live on AWS infrastructure in US regions.'
    },
    {
      value: '8',
      title: 'I have more questions. How can I reach you?',
      content:
        'Email <a href="mailto:support@ticketping.com" class="text-sand-600 dark:text-cement-400 border-b border-sand-200 dark:border-cement-800 hover:border-parrot-600 dark:hover:border-parrot-500 hover:text-parrot-600 dark:hover:text-parrot-500">support@ticketping.com</a>, and we\'ll get back to you quickly.'
    }
  ]
</script>

<section class="md:px-8">
  <div
    class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
  >
    <div class="w-full bg-daylight dark:bg-spaceblack">
      <div
        class="flex h-12 items-center justify-between font-mono text-xs font-medium tracking-wider text-sand-500 dark:text-cement-500 md:h-16 md:text-sm"
      >
        <span>// GOT QUESTIONS?</span>
      </div>
    </div>
  </div>
  <div
    class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
  >
    <div class="w-full bg-daylight dark:bg-spaceblack">
      <div class="-my-px border border-sand-100 dark:border-cement-900">
        <div class="">
          <h2
            class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100 mb-8 px-6 md:px-8 pt-6 md:pt-8"
          >
            Frequently Asked Questions
          </h2>

          <Accordion.Root
            class="w-full divide-y divide-sand-100 dark:divide-cement-900"
            type="multiple"
          >
            {#each faqs as faq (faq.value)}
              <Accordion.Item
                value={faq.value}
                class="group px-6 md:px-8 data-[state=open]:bg-white dark:data-[state=open]:bg-cement-950 transition-colors duration-200"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    class="flex w-full flex-1 select-none items-center justify-between py-5 text-left font-display text-lg md:text-xl font-500 text-sand-800 dark:text-cement-100 transition-all [&[data-state=open]>span>svg]:rotate-180"
                  >
                    <span class="w-full pr-4">
                      {faq.title}
                    </span>
                    <span
                      class="inline-flex size-8 items-center justify-center rounded-lg bg-transparent hover:bg-sand-100 dark:hover:bg-cement-900 transition-colors"
                    >
                      <CaretDown
                        class="size-[18px] transition-transform duration-200 text-sand-600 dark:text-cement-400"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm md:text-base"
                >
                  <div class="pb-6 text-sand-600 dark:text-cement-400">
                    {@html faq.content}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            {/each}
          </Accordion.Root>
        </div>
      </div>
    </div>
  </div>
</section>
