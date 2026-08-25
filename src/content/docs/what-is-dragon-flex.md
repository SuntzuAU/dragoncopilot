---
title: "What is Dragon Flex?"
question: "What is Dragon Flex, and is it a different product from Dragon Copilot?"
answer: "Dragon Flex is not a separate product. It is one of Microsoft's licensing options for Dragon Copilot: a lower recurring subscription that includes front-end medical dictation, plus a monthly allowance of AI-assisted sessions with additional sessions charged as they are used."
metaDescription: "Dragon Flex is a licensing option for Microsoft Dragon Copilot, not a separate product. How the Flex licence differs from Per User, and who each option suits."
hub: product
verified: "2026-08-25"
primaryKeyword: "Dragon Flex"
secondaryKeywords: ["Dragon Copilot Flex", "Dragon Copilot licensing options"]
order: 20
faqs:
  - q: "Is Dragon Flex the same as Dragon Copilot?"
    a: "Dragon Flex is a way of licensing Dragon Copilot, not a different product. A clinician on a Flex licence and a clinician on a Per User licence are using the same Dragon Copilot application; what differs is how the AI usage is paid for."
  - q: "What counts as an AI-assisted session?"
    a: "Microsoft defines an AI-assisted session more broadly than a recorded consultation. A session is counted when Dragon invokes generation, summarisation or reasoning — so AI use outside an ambient patient encounter can still consume the allowance."
  - q: "Do unused Flex sessions roll over to the next month?"
    a: "No. The monthly session allowance is calculated from the licences held on the first day of the month and pooled across the tenant. Unused sessions do not carry forward into the following month."
sources: [1, 4, 13, 124]
related: ["what-is-dragon-copilot"]
---

## How the two licensing options differ

Microsoft's commercial model for Dragon Copilot splits into two shapes, and the split is about
how AI usage is paid for rather than what the clinician can do.

**Per User** provides the complete physician feature set — front-end speech recognition plus the
ambient and generative AI capabilities — for a recurring subscription with no separate session charge.
It suits clinicians who use ambient documentation as their normal way of working, every day.

**Flex** provides a lower recurring subscription that includes the front-end dictation capability,
together with a monthly allowance of AI-assisted sessions. Beyond the allowance, sessions are charged
as they are consumed. It suits clinicians whose ambient use is occasional or seasonal, and
organisations that want to introduce ambient AI to a group without committing every user to the
full subscription.

## Why the session definition matters more than the allowance

The commonest planning mistake is to model Flex as though a session equals a patient consultation.
Microsoft's definition is broader: a session is counted when Dragon invokes generation, summarisation
or reasoning. That includes AI work that is not an ambient recording of a patient at all.

Two consequences follow. A clinician who never records a consultation can still consume sessions.
And a Flex tenant's real consumption is usually higher than a first estimate built on
appointment volumes.

## How the allowance is calculated

The allowance is derived from the licences held on the first day of the month, pooled across the
tenant rather than allocated per person, and does not roll over. Pooling is the useful part:
a heavy user and a light user on the same tenant draw from one shared allowance, so uneven usage
across a team is absorbed rather than penalised.

## Which option suits which clinician

<div class="tablewrap">
<table>
<caption>Licensing option by usage pattern. Status as at 25 August 2026.</caption>
<thead><tr><th scope="col">Usage pattern</th><th scope="col">Indicative fit</th><th scope="col">Why</th></tr></thead>
<tbody>
<tr><th scope="row">Ambient documentation on most consultations</th><td>Per User</td><td>No session metering to manage, and consumption is not a planning variable.</td></tr>
<tr><th scope="row">Dictation daily, ambient occasionally</th><td>Flex</td><td>The dictation capability is included; AI is paid for only when it is used.</td></tr>
<tr><th scope="row">Mixed team, uneven adoption</th><td>Flex</td><td>Pooling across the tenant absorbs uneven use between clinicians.</td></tr>
<tr><th scope="row">Evaluating before a wider rollout</th><td>Flex</td><td>Lower recurring commitment while adoption patterns are still unknown.</td></tr>
</tbody>
</table>
</div>

<aside class="callout callout--warn">
<p><strong>Licensing terms change.</strong> Microsoft restructured Dragon Copilot licensing during 2026,
including discontinuing a short-lived practice-level offer. Everything on this page reflects the
position verified on 25 August 2026. Confirm the current terms before committing to a contract.</p>
</aside>
