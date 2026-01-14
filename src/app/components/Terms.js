import React from "react";

export default function Terms() {
  return (
    <div className="bg-white pt-20 sm:pt-24 lg:pt-26">
      <div className="xxl:px-20 lg:px-10 md:px-6 px-4   md:py-[80px] sm:py-[60px] py-[40px]">
        <div className="max-w-[1020px] w-full mx-auto lg:space-y-12 md:space-y-8 space-y-6">
          <div className="lg:space-y-6 md:space-y-4 space-y-2">
            <h2 className="font-semibold 2xl:text-[64px] lg:text-[48px] sm:text-[38px] text-[32px] tracking-[-0.80px] leading-[100%] text-[#141410]">
              Acceptance of Terms
            </h2>
            <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] ">
              By registering on, accessing, or using One Wave's services (the
              “Platform”), you agree to be bound by these Terms and Conditions,
              our Privacy Policy, AML Policy, and any other legal agreements
              referenced herein.
            </p>
          </div>
          <div className="lg:space-y-10 md:space-y-8 space-y-6">
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                1. Eligibility{" "}
              </p>
              <div className="w-full h-[1.5px] bg-black/20  " />
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                You must be
              </p>
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>At least 18 years old</li>
                <li>Fully authorized to use services in your jurisdiction.</li>
                <li>
                  Not a resident of a restricted country or listed on any
                  sanctions list.
                </li>
              </ul>
            </div>
          
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                2. Services Offered
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                One Wave enables you to:
              </p>
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>Load fiat or crypto funds into a wallet.</li>
                <li>
                  Use balance for services such as mobile recharge, utility
                  bills, travel bookings, and more.
                </li>
                <li>Generate and use virtual cards for online purchases.</li>
                <li>
                  Convert crypto to fiat (and vice versa) where applicable.
                </li>
              </ul>
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%]">
                Services may vary depending on jurisdiction, user verification
                level, and regulatory constraints.
              </p>
            </div>

            {/* 3. User Verification (KYC) */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                3. User Verification (KYC)
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-semibold md:leading-[150%] leading-[120%]">
                To comply with UAE and global AML regulations:
              </p>
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>You must provide valid identity and address documents.</li>
                <li>
                  Additional verification may be required for high-value
                  transactions or use of crypto services.
                </li>
                <li>All information provided must be accurate and truthful.</li>
              </ul>
            </div>

            {/* 4. Wallet Usage */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                4. Wallet Usage
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>
                  Funds loaded into your wallet are solely for personal/legal
                  use.
                </li>
                <li>
                  One Wave is not a bank; funds are not insured by any deposit
                  protection scheme.
                </li>
                <li>Wallet balances are non-interest-bearing.</li>
              </ul>
            </div>

            {/* 5. Virtual Cards */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                5. Virtual Cards
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>
                  Virtual cards are issued via third-party licensed partners.
                </li>
                <li>
                  Cards may be restricted for certain merchant categories.
                </li>
                <li>
                  Users are responsible for safeguarding card credentials.
                </li>
              </ul>
            </div>

            {/* 6. Crypto Services */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                6. Crypto Services
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>
                  Fees may apply for wallet loading, withdrawals, virtual card
                  usage, and currency conversions.
                </li>
                <li>
                  Fee structures are published on the platform and may change
                  with prior notice.
                </li>
              </ul>
            </div>
            {/* 7. Restricted Activities */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                7. Restricted Activities
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-semibold md:leading-[150%] leading-[120%]">
                You agree not to use the platform for:
              </p>
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>Money laundering or terrorist financing.</li>
                <li>Purchasing illegal goods/services.</li>
                <li>Gambling, pornography, or darknet activity.</li>
                <li>Use by or on behalf of sanctioned entities/persons.</li>
              </ul>
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%]">
                Violations will result in account suspension and legal
                reporting.
              </p>
            </div>

            {/* 8. Account Termination */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                8. Account Termination
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%]">
                We reserve the right to suspend or terminate your account at any
                time for:
              </p>
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>Violation of these Terms.</li>
                <li>Suspicion of fraudulent activity.</li>
                <li>Governmental or regulatory requests.</li>
              </ul>
            </div>

            {/* 9. Data Privacy */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                9. Data Privacy
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%]">
                Your data will be handled per our [Privacy Policy]. We use
                encryption, third-party KYC providers, and secure cloud
                infrastructure to protect your data.
              </p>
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>Violation of these Terms.</li>
                <li>Suspicion of fraudulent activity.</li>
                <li>Governmental or regulatory requests.</li>
              </ul>
            </div>

            {/* 10. Limitation of Liability */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                10. Limitation of Liability
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%]">
                One Wave is not liable for:
              </p>
              <ul className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] list-disc pl-6">
                <li>
                  Losses due to third-party service outages, market volatility,
                  or hacking.
                </li>
                <li>Unauthorized access if caused by your negligence.</li>
                <li>
                  Delays in processing due to compliance checks or blockchain
                  congestion.
                </li>
              </ul>
            </div>

            {/* 11. Dispute Resolution */}
            <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                11. Dispute Resolution
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%]">
                All disputes shall be governed by the laws of the United Arab
                Emirates. Any dispute not resolved amicably shall be subject to
                the exclusive jurisdiction of the Dubai courts.
              </p>
            </div>
               {/* 12. Modifications to Terms */}
               <div className="md:space-y-3 space-y-2">
              <p className="text-[#1A1A19] lg:text-base text-sm font-bold md:leading-[150%] leading-[120%]">
                12. Modifications to Terms
              </p>
              <div className="w-full h-[1.5px] bg-black/20" />
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%]">
              We may update these Terms periodically. Users will be notified via platform or email.     <br/>
                Continued use after changes constitutes acceptance.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
