---
title: "Dragon Copilot privacy, security and data handling"
question: "How does Dragon Copilot handle patient data?"
answer: "Patient audio and transcripts are encrypted, processed within a defined geography, and retained for up to 90 days. Microsoft states its AI models are trained solely on anonymised data. Dragon Copilot carries SOC 1 and SOC 2 Type II attestations, with ISO 27001 and ISO 27701 certification in progress. Patient consent is the healthcare organisation's responsibility."
metaDescription: "Dragon Copilot privacy and security: data residency, retention, certifications and consent obligations, from Microsoft's published documentation."
hub: compliance
verified: "2026-08-26"
primaryKeyword: "Dragon Copilot privacy security"
secondaryKeywords: ["Dragon Copilot data retention", "Dragon Copilot patient data", "Dragon Copilot encryption", "is Dragon Copilot secure"]
order: 10
faqs:
  - q: "Does Microsoft train its AI models on my patients' data?"
    a: "Microsoft states that Dragon Copilot's AI models are trained solely on anonymised data. Selected customer data — audio, transcripts, clinical documentation and clinician corrections — is transmitted to a research environment where it is anonymised within 90 days of capture. Microsoft states this anonymisation meets the HIPAA de-identification standard and the GDPR anonymisation standard."
  - q: "How long is patient audio kept?"
    a: "Microsoft states audio, recognised text, transcript and flowsheet data are retained for up to 90 days. Voice dictation and text used for user-specific accuracy adaptation are retained for up to 180 days and then purged. Deletion is managed through Microsoft Purview Data Lifecycle Management."
  - q: "Do we need patient consent to use ambient documentation?"
    a: "Yes, and Microsoft is explicit that this obligation sits with your organisation, not with the product. Microsoft's guidance states that users must obtain patient consent before recording, in accordance with relevant law and organisational policy. There is no consent mechanism built into the product itself, so this belongs in your clinical governance framework."
  - q: "Is Dragon Copilot a regulated medical device?"
    a: "Dragon Copilot for physicians is UK Conformity Assessed as a Class I medical device in Great Britain. Microsoft states that in all other jurisdictions it is not designed, intended or made available as a medical device. It is positioned as a tool supporting qualified clinicians, and all generated content must be reviewed and validated by the clinician before it enters the medical record."
sources: []
internalLinks:
  - to: "/emr/"
    anchor: "which clinical systems Dragon works with"
related: ["dragon-copilot-vs-dragon-medical-one"]
---

## Why this page exists

If you are buying clinical AI for an Australian hospital, health service or practice, the security
questionnaire arrives before the purchase order. This page sets out what Microsoft has actually
published about how Dragon Copilot handles data, so you can answer those questions from the source
rather than from marketing material.

Dragon Copilot is coming to the Australian market. Microsoft has not announced an Australian release
date, and the Australian compliance position will be confirmed as it is released. What follows is the
current published position for the markets where it operates today — which is the best guide available
to what an Australian deployment will look like.

## Where data is processed

Microsoft publishes a data residency table mapping customer location to where data is held at rest.
The pattern is regional containment: United States customers' data stays in the United States, Canadian
data in Canada, United Kingdom data in the United Kingdom, and European customers are served from
France or Germany with the research environment held within the EU.

Microsoft's stated principle is that data never leaves its geography, and Dragon Copilot is designated
an EU Data Boundary Service for European customers.

The Australian row does not exist yet, because Australia is not yet a served market. This is the single
most important item to confirm before an Australian government or hospital procurement completes, and
it is the first thing we will publish when Microsoft releases the Australian position.

Worth knowing in the meantime: **Dragon Medical One already runs on Australian infrastructure**, with a
documented Australian regional endpoint and an Australian resource centre. Australian clinicians using
Dragon Medical One today are not sending dictation offshore.

## Retention

| Data type | Retention |
|---|---|
| Audio recordings | Up to 90 days |
| Recognised text and transcripts | Up to 90 days |
| Flowsheet values | Up to 90 days |
| Voice and text used for user-specific accuracy adaptation | Up to 180 days, then purged |

Deletion is managed through Microsoft Purview Data Lifecycle Management. Microsoft states that audio
acquired during an examination is used for recognition in memory and is never stored unencrypted, and
that on mobile devices audio is deleted from the device after upload.

## Model training

This is the question that stops procurement, so it is worth being precise about what Microsoft says.

Microsoft states that Dragon Copilot's AI models are trained solely on anonymised data. The mechanism
is that selected customer data — audio recordings, transcriptions, clinical documentation, and the
corrections clinicians make to generated documentation — is transmitted to a designated research
environment, where it is processed and anonymised within 90 days of capture.

Microsoft states this anonymisation meets the de-identification standard under HIPAA and the
anonymisation standard under GDPR, including Recital 26.

If your organisation requires a contractual opt-out from the research pipeline, raise it during
negotiation rather than assuming one is configured by default.

## Certifications

| Standard | Position |
|---|---|
| SOC 1 Type II | Attested |
| SOC 2 Type II | Attested |
| ISO/IEC 27001 | Certification in progress |
| ISO/IEC 27701 | Certification in progress |
| C5 Type II | Attested |
| NEN 7510/2/3 | Attested |
| HIPAA | Supported, backed by a Business Associate Agreement |
| GDPR, UK GDPR, PIPEDA | Compliance supported |

A distinction that matters when you are filling in a security assessment: the underlying Azure platform
carries a much broader certification set, including HITRUST, ISO 27017, ISO 27018 and FedRAMP. Those are
platform certifications. The table above is the service itself. Assessors will ask you which one you are
quoting, so quote the right one.

On IRAP — the Australian Government's assessment framework — Microsoft's IRAP assessments cover Azure,
Dynamics 365 and Microsoft 365 at the PROTECTED level. Dragon products are not currently within that
scope. For Australian government buyers this is a live question to put to Microsoft during procurement
rather than an assumption to make either way.

## Consent

Microsoft's position is consistent across every page where it addresses this: obtaining patient consent
before ambient recording is the healthcare organisation's obligation, not the product's.

There is no consent capture built into Dragon Copilot. Microsoft's documentation directs organisations
to incorporate a consent step before recording and to document consent procedures as part of the
integration.

In Australia this is not a formality. Recording a conversation engages state and territory surveillance
and listening devices legislation, which is not uniform across jurisdictions, alongside the Privacy Act
and the Australian Privacy Principles. Organisations operating across state boundaries should expect to
build a consent process that satisfies the strictest jurisdiction they operate in.

## Regulatory status

Dragon Copilot for physicians is UK Conformity Assessed as a Class I medical device in Great Britain.

In every other jurisdiction, Microsoft states plainly that Dragon Copilot is not designed, intended or
made available as a medical device, and is not a substitute for professional medical advice, diagnosis,
treatment or judgment.

The framing Microsoft uses throughout is that the product augments and never replaces clinical
expertise, and that all generated content must be reviewed and validated by the clinician before it
becomes part of the medical record. Any clinical governance framework you build around it should reflect
that: the clinician signs, and the clinician is accountable for what is signed.

## What to confirm before you buy

If you are running a procurement, these are the items to put in writing:

1. Australian data residency and processing location, confirmed for your deployment
2. Whether an opt-out from the AI research and anonymisation pipeline is contractually available
3. Retention periods as they apply under your agreement, and how they interact with your own record-keeping obligations
4. Current certification status at the point of contract, since ISO certifications in progress today may have completed by then
5. IRAP position, if you are a government buyer
6. A consent process that satisfies every jurisdiction you operate in

We can help you get those answers from Microsoft and the distributor. Ask us and we will get the current
position rather than the position at the date on this page.
