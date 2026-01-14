import React from "react";

export default function RegulatoryCompliance() {
  return (
    <div className="bg-white pt-20 sm:pt-24 lg:pt-26">
      <div className="xxl:px-20 lg:px-10 md:px-6 px-4 md:py-[80px] sm:py-[60px] py-[40px]">
        <div className="max-w-[1020px] w-full mx-auto lg:space-y-12 md:space-y-8 space-y-6">
          <div className="lg:space-y-6 md:space-y-4 space-y-3">
            <h2 className="font-semibold 2xl:text-[64px] xl:text-[56px] lg:text-[48px] md:text-[40px] sm:text-[36px] text-[28px] tracking-[-0.80px] leading-[110%] text-[#141410]">
              Regulatory Compliance
            </h2>
          </div>

          <div className="lg:space-y-10 md:space-y-8 space-y-6">
            {/* 1.1. Licensing and Legal Status */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                1. Regulatory Compliance
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                1.1. Licensing and Legal Status
              </p>

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Operating under valid Trade License issued in Dubai, UAE.
                </li>
                <li>
                  Subject to supervision by UAE regulatory authorities and
                  seeking compliance with VARA for Virtual Asset Services.
                </li>
                <li>
                  Structured in line with UAE's Federal AML Law (No. 20 of 2018)
                  and Cabinet Decision No. 10 of 2019.
                </li>
              </ul>
            </div>

            {/* 1.2. KYC & AML Policy */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                1.2. KYC & AML Policy
              </p>

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  KYC performed on all customers (name, ID, address, selfie).
                </li>
                <li>
                  Enhanced due diligence for high-risk profiles (PEPs,
                  non-residents).
                </li>
                <li>
                  Ongoing transaction monitoring using automated rule-based
                  systems.
                </li>
              </ul>
            </div>

            {/* 1.3. Sanctions & Restricted Country Screening */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                1.3. Sanctions & Restricted Country Screening
              </p>

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Screening against:
                  <ul className="list-disc pl-5 md:pl-6 font-bold mt-1 space-y-1">
                    <li>UN</li>
                    <li>OFAC</li>
                    <li>EU</li>
                    <li>UAE National List</li>
                  </ul>
                </li>
                <li>
                  Access denied for users from sanctioned countries or high-risk
                  zones.
                </li>
              </ul>
            </div>

            {/* 1.4. Crypto Regulatory Alignment */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                1.4. Crypto Regulatory Alignment
              </p>

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Adhering to FATF Travel Rule requirements for crypto
                  transfers.
                </li>
                <li>
                  Wallet traceability via blockchain analytics (e.g.
                  Chainalysis, Elliptic).
                </li>
                <li>Only support compliant and verified virtual assets.</li>
              </ul>
            </div>

            {/* 2.1. User Data Protection */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                2. Security Architecture
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />

              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                2.1. User Data Protection
              </p>
              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  End-to-end{" "}
                  <span className="font-bold"> TLS/SSL encryption </span> for
                  all data in transit.
                </li>
                <li>
                  Personally Identifiable Information (PII) encrypted at rest.
                </li>
                <li>
                  Secure user authentication (2FA, biometric login where
                  possible).
                </li>
              </ul>
            </div>

            {/* 2.2. Wallet & Funds Security */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                2.2. Wallet & Funds Security
              </p>

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Funds are stored using a multi-sig wallet infrastructure.
                </li>
                <li>Cold storage for majority of crypto assets.</li>
                <li>
                  Partnering with secure, licensed custodians for fiat
                  settlement.
                </li>
              </ul>
            </div>

            {/* 2.3. Platform Integrity */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                2.3. Platform Integrity
              </p>

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Application hosted on ISO 27001-compliant cloud infrastructure
                  (e.g., AWS or Azure).
                </li>
                <li>Firewall and DDoS mitigation layers implemented.</li>
                <li>
                  Regular penetration testing and vulnerability scans conducted.
                </li>
              </ul>
            </div>

            {/* 2.4. Virtual Cards */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                2.4. Virtual Cards
              </p>

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>Virtual cards issued via PCI-DSS-compliant providers.</li>
                <li>Card details tokenized and never stored on our servers.</li>
                <li>
                  Real-time fraud detection integrated into card usage engine.
                </li>
              </ul>
            </div>

            {/* 3. Operational Controls */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                3. Operational Controls
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />

              {/* 3.1 Access Controls */}
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                3.1. Access Controls
              </p>
              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Role-based access control (RBAC) across admin and developer
                  dashboards.
                </li>
                <li>
                  Mandatory audit trails for any changes in user data or
                  financial transactions.
                </li>
              </ul>
            </div>

            {/* 3.2 Incident Response */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                3.2. Incident Response
              </p>
              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>Incident Response Plan (IRP) in place.</li>
                <li>
                  SLA for security incident response: within 2 hours of
                  detection.
                </li>
                <li>
                  Communication plan for breach disclosure if required by law.
                </li>
              </ul>
            </div>

            {/* 3.3 Vendor Risk Management */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                3.3. Vendor Risk Management
              </p>
              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  All third-party providers (KYC, payments, cloud hosting, etc.)
                  undergo due diligence.
                </li>
                <li>Data Processing Agreements (DPAs) in place.</li>
                <li>
                  Vendors must comply with GDPR-equivalent data standards.
                </li>
              </ul>
            </div>

            {/* 4. Customer Protection & Transparency */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                4. Customer Protection & Transparency
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />

              {/* 4.1 Terms, Privacy, and Consent */}
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                4.1. Terms, Privacy, and Consent
              </p>
              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Clear Terms & Conditions, Privacy Policy, Refund Policy
                  available on platform.
                </li>
                <li>
                  Explicit consent collected for data usage, crypto services,
                  and virtual card issuance.
                </li>
              </ul>
            </div>

            {/* 4.2 User Controls */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                4.2. User Controls
              </p>
              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Ability to lock cards, freeze wallet, update KYC data, or
                  close account at any time.
                </li>
                <li>
                  Transaction history, balances, and limits transparently shown
                  in user dashboard.
                </li>
              </ul>
            </div>

            {/* 5. Ongoing Compliance and Audit */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base md:text-[15px] text-[14px] font-bold md:leading-[150%] leading-[140%]">
                5. Ongoing Compliance and Audit
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />

              <ul className="text-[#1A1A19] lg:text-base md:text-[15px] text-[13px] font-medium md:leading-[150%] leading-[140%] list-disc pl-5 md:pl-6 space-y-1.5">
                <li>
                  Internal Compliance Officer responsible for AML, sanctions,
                  and licensing updates.
                </li>
                <li>Periodic internal audits and external reviews.</li>
                <li>
                  Training sessions for employees on security, privacy, AML
                  laws, and platform risks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
