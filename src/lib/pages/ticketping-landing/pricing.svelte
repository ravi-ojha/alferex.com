<script>
  import Check from 'phosphor-svelte/lib/Check'
</script>

<section class="md:px-8">
  <div
    class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
  >
    <div class="w-full bg-daylight dark:bg-spaceblack">
      <div
        class="flex h-12 items-center justify-between font-mono text-xs font-medium tracking-wider text-sand-500 dark:text-cement-500 md:h-16 md:text-sm"
      >
        <span>// PRICING</span>
      </div>
    </div>
  </div>
  <div
    class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0 bg-repeat bg-[url(/images/landing/bg-pattern-slash-light.svg)] dark:bg-[url(/images/landing/bg-pattern-slash.svg)]"
  >
    <div class="w-full bg-daylight dark:bg-spaceblack">
      <div class="-my-px border border-sand-100 dark:border-cement-900">
        <div class="flex flex-col p-6 md:p-8">
          <h3
            class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100"
          >
            Predictable pricing.
          </h3>
          <p
            class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-300 dark:text-cement-700 mt-3"
          >
            No per-seat fees. No ticket-based billing headaches.
          </p>
        </div>

        <div class="">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div
              class="flex flex-col p-6 md:p-8 border-t md:border-r border-sand-100 dark:border-cement-900"
            >
              <h4
                class="font-display text-xl md:text-2xl font-500 text-sand-800 dark:text-cement-100"
              >
                Seed
              </h4>
              <p
                class="text-3xl md:text-4xl font-display font-500 text-sand-800 dark:text-cement-100 mt-2"
              >
                $29<span class="text-base text-sand-500 dark:text-cement-500">/mo</span>
              </p>

              <hr class="my-4 border-sand-200 dark:border-cement-900 border-dashed" />

              <!-- Ideal for Section -->
              <div class="p-1 rounded-lg">
                <p class="text-xs font-mono font-medium text-sand-400 dark:text-cement-600 mb-2">
                  IDEAL FOR
                </p>
                <div class="flex items-center gap-4 text-sm">
                  <div class="flex items-center gap-1.5">
                    <span>🌱</span>
                    <span class="font-mono text-sand-700 dark:text-cement-300 font-medium"
                      >100–200 tickets/mo</span
                    >
                  </div>
                </div>
              </div>

              <hr class="my-4 border-sand-200 dark:border-cement-900 border-dashed" />

              <ul class="space-y-2.5 mt-2 text-sm grow mb-6">
                <li class="flex flex-col items-start">
                  <div class="flex flex-row items-center gap-2">
                    <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                    <span class="text-sand-800 dark:text-cement-200 font-medium"
                      >Slack Integration</span
                    >
                  </div>
                  <ul class="space-y-2.5 mt-2 text-sm pl-4">
                    <li class="flex items-center gap-2">
                      <span class="text-sand-400 dark:text-cement-600">–</span>
                      <span class="text-sand-600 dark:text-cement-400">Notifs for new tickets</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="text-sand-400 dark:text-cement-600">–</span>
                      <span class="text-sand-600 dark:text-cement-400"
                        >Reply in threads, just tag <span
                          class="font-mono text-sand-700 dark:text-cement-300">@Ticketping</span
                        ></span
                      >
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="text-sand-400 dark:text-cement-600">–</span>
                      <span class="text-sand-600 dark:text-cement-400">Collab with your team</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="text-sand-400 dark:text-cement-600">–</span>
                      <span class="text-sand-600 dark:text-cement-400">Update ticket status</span>
                    </li>
                  </ul>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400"
                    >Connect support@domain email</span
                  >
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Chat Widget</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Inbox Dashboard</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Ticket Forms</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Knowledge Base</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Email Support</span>
                </li>
              </ul>

              <a
                href="/register"
                class="btn btn-sm btn-secondary font-semibold w-full justify-center"
              >
                <span class="text-sm">Start your free trial</span>
              </a>
            </div>

            <div
              class="flex flex-col p-6 md:p-8 border-t md:border-r border-sand-100 dark:border-cement-900 bg-white dark:bg-cement-950"
            >
              <h4
                class="font-display text-xl md:text-2xl font-500 text-sand-800 dark:text-cement-100"
              >
                Startup
              </h4>
              <p
                class="text-3xl md:text-4xl font-display font-500 text-sand-800 dark:text-cement-100 mt-2"
              >
                $99<span class="text-base text-sand-500 dark:text-cement-500">/mo</span>
              </p>

              <hr class="my-4 border-sand-200 dark:border-cement-900 border-dashed" />

              <!-- Ideal for Section -->
              <div class="p-1 rounded-lg">
                <p class="text-xs font-mono font-medium text-sand-400 dark:text-cement-600 mb-2">
                  IDEAL FOR
                </p>
                <div class="flex items-center gap-4 text-sm">
                  <div class="flex items-center gap-1.5">
                    <span>🚀</span>
                    <span class="font-mono text-sand-700 dark:text-cement-300 font-medium"
                      >300–600 tickets/mo</span
                    >
                  </div>
                </div>
              </div>

              <hr class="my-4 border-sand-200 dark:border-cement-900 border-dashed" />

              <ul class="space-y-2.5 mt-2 text-sm grow mb-6">
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-800 dark:text-cement-200 font-medium"
                    >Everything in Seed plan</span
                  >
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">AI enabled Chat Widget</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">AI Proofreading</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Private Notes</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Team Roles</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Canned Responses</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Admin Reports</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Ticket via API</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Support via Slack Connect</span>
                </li>
              </ul>

              <a
                href="/register"
                class="btn btn-sm btn-primary btn-caret font-semibold w-full justify-center"
              >
                <span class="text-sm">Start your free trial</span>
                <span class="btn-caret-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <!-- Stem (appears on hover) -->
                    <rect class="arrow-stem" x="24" y="112" width="136" height="32" rx="16"></rect>
                    <!-- Chevron (always visible) -->
                    <path
                      class="caret"
                      d="M181.66,133.66l-80,80A8,8,0,0,1,88.37,202.3L157,128,88.37,53.7a8,8,0,0,1,13.29-11.36l80,80A8,8,0,0,1,181.66,133.66Z"
                      stroke="currentColor"
                      stroke-width="16"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>

            <div class="flex flex-col p-6 md:p-8 border-t border-sand-100 dark:border-cement-900">
              <h4
                class="font-display text-xl md:text-2xl font-500 text-sand-800 dark:text-cement-100"
              >
                Scale
              </h4>
              <p
                class="text-3xl md:text-4xl font-display font-500 text-sand-800 dark:text-cement-100 mt-2"
              >
                $199<span class="text-base text-sand-500 dark:text-cement-500">/mo</span>
              </p>

              <hr class="my-4 border-sand-200 dark:border-cement-900 border-dashed" />

              <div class="p-1 rounded-lg">
                <p class="text-xs font-mono font-medium text-sand-400 dark:text-cement-600 mb-2">
                  IDEAL FOR
                </p>
                <div class="flex items-center gap-4 text-sm">
                  <div class="flex items-center gap-1.5">
                    <span>🦄</span>
                    <span class="font-mono text-sand-700 dark:text-cement-300 font-medium"
                      >800–1200 tickets/mo</span
                    >
                  </div>
                </div>
              </div>

              <hr class="my-4 border-sand-200 dark:border-cement-900 border-dashed" />

              <ul class="space-y-2.5 mt-2 text-sm grow mb-6">
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-800 dark:text-cement-200 font-medium"
                    >Everything in Startup plan</span
                  >
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">AI Response Suggestions</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Multiple Workspaces</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Advanced Analytics</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Custom Ticket Status</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Full API Access</span>
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Custom Sending Email Domain</span
                  >
                </li>
                <li class="flex items-center gap-2">
                  <Check class="shrink-0 text-sand-400 dark:text-cement-600" weight="bold" />
                  <span class="text-sand-600 dark:text-cement-400">Priority Support via Slack</span>
                </li>
              </ul>

              <a
                href="https://cal.com/ravi-ojha/ticketping-demo"
                target="_blank"
                class="btn btn-sm btn-secondary font-semibold w-full justify-center"
              >
                <span class="text-sm">Book a demo</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Fair Use & Volume -->
        <div class="border-t border-sand-100 dark:border-cement-900 p-6 md:p-8">
          <h3
            class="font-display text-xl md:text-2xl font-500 text-sand-800 dark:text-cement-100 mb-3"
          >
            Fair Use & Volume
          </h3>
          <p class="text-sand-600 dark:text-cement-400 text-sm md:text-base">
            Every plan includes a soft usage buffer. If your ticket volume slightly exceeds the
            recommended range, you're still covered.
          </p>
          <p class="text-sand-600 dark:text-cement-400 text-sm md:text-base mt-2">
            If volume consistently exceeds the range for your tier, we'll recommend upgrading — no
            surprise billing.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
