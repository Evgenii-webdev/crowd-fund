import React, { Component } from "react";
import { Collapse, Popover } from "antd";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface ICommentFromProps {
  dark: any;
  id: any;
  title: any;
  subtitle: any;
  section_id: any;
}
interface ISectionState {
  visible: boolean;
  value: string;
  copied: boolean;
}
const faqContentItems = [
  [
    {
      list_item_title: "How do I fund an investment?",
      description:
        "Once you have a YieldStreet Wallet set up, there are a few ways your investment could be funded. 1. If you choose to pre-fund your wallet, funds will be pulled directly from your wallet and you will not have to wait for settlement of funds allowing your investment to be active sooner. 2. If you don’t choose to pre-fund your wallet when submitting an investment allocation, if there are not enough or no funds in your wallet at that time, you can select to have funds pulled electronically that day, or, you can select to delay funding by two days. This will allow funding to be initiated two business days after your allocation was submitted. If you indicate your preferred method as wire transfer, you will receive wire instructions via email and you are responsible to initiate payment to YieldStreet once your accredited investor status is confirmed. We typically can accommodate up to 5 business days to receive your funds. Please note that an investment is not considered complete until we have received your payment.",
      dkey: "0"
    },
    {
      list_item_title: "What am I investing in?",
      description:
        "YieldStreet provides investors access to debt based alternative.investments, typically with low correlation to the stock market. While these investments were historically dominated by hedge funds and large institutions, YieldStreet works to bring them to you. YieldStreet works with experienced originators who typically provide a loan for a project or need that is collateralized by an underlying asset from the associated borrower, such as a real estate property, legal settlement or shipping vessel. Our offerings currently concentrate in four primary alternative asset classes: Commercial and Residential Real Estate, Litigation Finance, Marine Finance, and Commercial Finance. You can learn more about each of our asset classes on YieldStreet University. Finally, all YieldStreet investment offerings target annual yields between 8-20%.",
      dkey: "1"
    },
    {
      list_item_title: "How much can I invest?",
      description:
        "Minimums typically start around $10,000-$15,000 at YieldStreet. We have both minimum and maximum investment amounts in each offering to try to accommodate as many investors as possible.",
      dkey: "2"
    },
    {
      list_item_title: "How do I make my first investment?",
      description:
        "First, you’ll need to set up your account. To begin, click the “Sign Up” button on the homepage. After completing your investor profile, you’ll be able to participate in an investment offering. To make your first investment, simply login to the YieldStreet platform, visit the offering page and then click on the individual offering. Next, enter your desired investment amount, noting the investment minimum, and then click “Invest Now”. You’ll then arrive at a page finalizing how you would like to fund your investment.",
      dkey: "3"
    },
    {
      list_item_title:
        "What should I do if I need compliance approval from my employer to invest?",
      description:
        "If your investment must receive compliance approval from your employer, YieldStreet will try to accommodate your investment request. Once you submit an investment, please send an email to investments@yieldstreet.com to let us know that you are awaiting compliance approval. In the meantime, we will pull funds from your YieldStreet Wallet, however they will not be applied to the investment offering until approval is granted. We will hold the allocation for up to 7 business days. Once you have been approved, contact our team and we will process your investment. If your compliance approval process takes more than 7 business days, unfortunately, we will likely need to cancel your investment.",
      dkey: "4"
    },
    {
      list_item_title:
        "Can I invest on YieldStreet using an online brokerage account?",
      description:
        "This will vary depending on which brokerage account provider you use. Please note your brokerage account must be ACH compatible. Please contact our investment team directly at investments@yieldstreet.com to discuss further.",
      dkey: "5"
    },
    {
      list_item_title: "Why did the minimum investment change?",
      description:
        "YieldStreet currently uses either a Special Purpose Vehicle (SPV) or a Borrower Payment Dependent Note (BPDN) structure for each investment opportunity. As an offering fills, we may need to increase the required minimum investment. We have both minimum and maximum investment amounts in each offering to try to accommodate as many investors as possible.",
      dkey: "6"
    },
    {
      list_item_title:
        "Can I modify or cancel my investment once it is complete?",
      description:
        "Currently, active investments on YieldStreet are not liquid. Once your investment is complete, you cannot modify or cancel your investment for the remaining duration of the offering you have invested in. Your investment is considered complete after we have delivered countersigned investment documents, verified your accreditation status, and received your payment.Should you decide to modify or cancel your investment before it is considered complete please reach out to us immediately, we will do whatever we can to help.",
      dkey: "7"
    },
    {
      list_item_title: "Can I get a refund on an investment?",
      description:
        "Currently, all completed investments on YieldStreet are not eligible for a refund. In the case of an emergency or extreme financial need, please contact investments@yieldstreet.com.",
      dkey: "8"
    },
    {
      list_item_title: "What are YieldStreet’s fees?",
      description:
        "The target return advertised and displayed on the website for each offering is net of listing and management fees and represents the target return an investor would earn from their investment if the underlying asset fully performs and there are no defaults or other extenuating circumstances.Listing Fees: On an individual offering, there may be a flat listing fee that is charged to the originator of such offering by YieldStreet Inc. This fee may be zero or waived at Yieldstreet’s sole discretion.Management Fees: YieldStreet Management, LLC collects a management fee on all offerings, generally ranging between 1 – 4% annually. These fees are disclosed on the individual offering page and in the Operating Agreement and Investment Memorandum (SPV) or Series Note Supplement (BPDN) for each offering. As described, the displayed and advertised target return for all offerings is net of these listing and management fees.The management fee is disclosed on the individual offering pages for each investment opportunity.There are also annual flat expenses investors are responsible for per investment (these are paid from initial interest distributions from your investment) that vary slightly depending on the legal structure of the offering (either SPV or BPDN structure).",
      dkey: "9"
    },
    {
      list_item_title: "Why is my investment pending?",
      description:
        "Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds.  Your investment will become active up to 5 business days from the date funds are debited from your account.",
      dkey: "10"
    }
  ],
  [
    {
      list_item_title: "What custodians have you worked with?",
      description:
        "Your custodian’s processes will need to be compatible with the YieldStreet platform. To do this, they’ll need to accept electronic signatures, commit to send wires, and process paperwork within 5 business days. They will also have to accept ACH distributions back into your Self-Directed IRA account.Some of the IRA custodians we work with include Alto IRA/Empire Trust, Millennium Trust, IRA Services, Strata Trust Company, and Broad Financial. We also work with WealthFlex and Madison Trust, who will set up your account as a Checkbook IRA and allow you to connect your IRA to a bank account.Unfortunately, we cannot work with IRAs custodied at Vanguard, Schwab, or TD Ameritrade. If your custodian’s process is not compatible with our processes, you can consider opening a new IRA account at one of the custodians referenced above.Once you have established a Self-Directed IRA account at a compatible custodian, learn more about how to add this account onto the YieldStreet platform.",
      dkey: "11"
    },
    {
      list_item_title: "Can I invest on YieldStreet using my IRA?",
      description:
        "You are able to invest on the YieldStreet platform if you are using a Self-Directed IRA or a Checkbook IRA. Any other type of IRA cannot be used to invest in the alternative investments offered on the YieldStreet platform.First, you will need to confirm that the custodian you are working with is compatible with our processes, and then you will need to set up an entity account on the YieldStreet platform for your IRA.Learn more about the custodians we work with here.",
      dkey: "12"
    },
    {
      list_item_title: "Setting up your Self-Directed IRA",
      description:
        "Make sure to watch our video on setting up your Self-Directed IRA and confirm that your custodian is compatible with our platform.You will need to complete the following steps to get an IRA account set up on YieldStreet’s platform:1. Choose to invest as either a Self-Directed IRA Account or as a Checkbook IRA, depending on your custodian2. Title your account correctly2A. For a Self-Directed IRA the title should read: [Your IRA Custodian for the benefit of [investor name] – IRA account number. (i.e.: XYZ IRA Custodian for the benefit of John Smith – 4567890.) 2B. If your account is set up as a Checkbook IRA, you will instead use the Trust Name as the title of the account.3. Title of signer: Indicate “Owner/beneficiary” or Trustee.4. Provide the account and routing number for the bank account that directs back to your Self-Directed IRA to ensure your principal and interest payments are distributed correctly.",
      dkey: "13"
    },
    {
      list_item_title:
        "What do I do after I have made an investment using a Self-Directed IRA?",
      description:
        "After investing on YieldStreet, you will receive a copy of the subscription agreement with forms to send to your IRA company. You will also need to complete any forms deemed necessary by your IRA company. Once all documentation is complete, your IRA company will send your investment allocation directly to YieldStreet.",
      dkey: "14"
    },
    {
      list_item_title:
        "What is the tax treatment of payments from or to an IRA?",
      description:
        "When using a Self-Directed IRA to invest, it is important to ensure your account is set up accordingly to direct principal and interest payments back to your Self-Directed IRA. Ensuring money is sent directly to your IRA will help avoid taxation of the monies. Please consult your tax adviser with questions regarding your personal tax treatment.",
      dkey: "15"
    },
    {
      list_item_title: "Can I have a Wallet with my Self-Directed IRA?",
      description:
        "YieldStreet is not a custodian, so your YieldStreet Wallet cannot hold funds associated with your Self-Directed IRA. All distributions will flow back to the bank account associated with your IRA, which will be connected during your account set-up process. Be sure to confirm the correct routing and account number with your custodian.If your Checkbook IRA is set up as a Trust or LLC, you will be eligible to hold funds associated with this account in a YieldStreet Wallet. In this case, all distributions will be deposited in your YieldStreet Wallet.",
      dkey: "16"
    }
  ],
  [
    {
      list_item_title: "Who can invest in these offerings?",
      description:
        "YieldStreet Management, LLC is an SEC registered investment advisor (RIA) that manages funds issuing securities under Rule 506(c) of Regulation D under the Securities Act of 1933. As a result, under current SEC regulation we are required by law to verify that all of our investors are accredited. There are three methods you can use to verify your accreditation status:You can submit a verification request through the YieldStreet system to a third party such as your CPA or lawyer who will validate your status on your behalf.If you qualify based on income (requirement is $200K/yr for the past two years as an individual, or $300K/yr if joint, and reasonably expects same for current year), you can upload your W2 documents for the two most recent tax years.If you qualify based on net worth either alone or with a spouse (required to exceed $1M, excluding the value of your primary residence), you can upload bank/brokerage statements that show assets as well as a credit report to show liabilities.Check out our video Are you an accredited investor? for more information.",
      dkey: "17"
    },
    {
      list_item_title:
        "What documentation can I provide to confirm my accreditation via net worth?",
      description:
        "Please refer to the following chart to learn what asset and liability documentation is accepted by YieldStreet.",
      dkey: "18"
    },
    {
      list_item_title:
        "What third party agents are appropriate to confirm my accreditation?",
      description:
        "Please refer to the following chart to learn which type of third party verification is accepted by YieldStreet.",
      dkey: "19"
    },
    {
      list_item_title:
        "What income verification documents are acceptable to use to confirm my accreditation?",
      description:
        "Please refer to the following chart to learn what forms of income verification are accepted by YieldStreet.",
      dkey: "20"
    },
    {
      list_item_title:
        "How frequently do I need to update accreditation information?",
      description:
        "Typically, once your accreditation verification is submitted, you will need to update your accreditation documentation once per year. If you verify your accreditation status based on income, please note that the verification is for the past two tax years, so your verification will be valid until the following “Tax Day.”For example, if you validate your status based on 2016 and 2017 W2 information, your status will be valid until April 15, 2019 (Tax Day), at which point you would need to submit 2018 income verification.If you verify your accreditation status based on net worth, provided all statements are current, your status will be valid for one year from the date the documentation was verified. Finally, if you verify your accreditation status via a third party, your verification will be valid for one year from the date the verification letter was submitted, unless otherwise stated.",
      dkey: "21"
    },
    {
      list_item_title:
        "What documentation must I provide to confirm accreditation if I am investing on behalf of an entity?",
      description:
        "If not providing third party verification, all entities must provide the operating agreement of their entity. If the investor is not the sole owner of the entity, all owners must be accredited or have assets in excess of $5M.",
      dkey: "22"
    },
    {
      list_item_title:
        "What documentation must I provide to confirm accreditation if I am investing on behalf of my trust?",
      description:
        "If not providing third party verification, all trusts must provide the Trust Agreement. If you are the trustee of a trust, you can invest if either:a) it is a revocable trust and the grantor is accredited; orb) in the case that the trust is not a revocable trust, all beneficiaries must be accredited or the trust must have assets in excess of $5M.",
      dkey: "23"
    },
    {
      list_item_title: "What if I am not an accredited investor?",
      description:
        "Because YieldStreet is a registered investment advisor (RIA) managing funds issuing securities under rule 506(c), we are required by law to verify that all of the funds’ investors are accredited. However, we are actively researching ways that we can open up our investment offerings to all users, regardless of accreditation status. In the meantime we are proud to announce that, all users, regardless of accreditation status are able to use YieldStreet Wallet, a way for investors to earn 2.2% interest on all cash held on YieldStreet.",
      dkey: "24"
    }
  ],
  [
    {
      list_item_title: "How are earnings on YieldStreet taxed?",
      description:
        "There are two types of legal structures that YieldStreet uses for investments – Special Purpose Vehicle (SPV) offerings or Borrower Payment Dependent Note (BPDN) offerings. Each produces a different tax document. SPV offerings will produce a K-1 form that will state interest income, which is typically reported as ordinary income. BPDN offerings, on the other hand, will produce a Form 1099.Please see this article for more information on how YieldStreet investments are taxed.",
      dkey: "25"
    },
    {
      list_item_title: "What is a prefunded offering?",
      description:
        "When you invest in a prefunded offering, you will begin to earn interest immediately after your investment is complete and marked Active within your Portfolio.Most of the opportunities you see on YieldStreet are prefunded. This means that, for certain offerings, YieldStreet has put forward the full loan amount to the originator via our credit facility at the start date of the offering, and this  balance decreases as investors make individual investment allocations in the offering.",
      dkey: "26"
    },
    {
      list_item_title:
        "How do I see the status of my investments? When is my investment active?",
      description:
        "To see the status of your investments, you can visit your portfolio page by clicking on the ‘View Portfolio’ link when you are logged in to YieldStreet. When you initially make your investment, the investment will be marked as “Pending” in your Portfolio.Once you have completed your investment request, you will receive a confirmation email. Provided the account through which you submitted your investment request is properly set up, in that your identity, accreditation and banking information are verified, your investment will go Active and begin accruing interest within 5 business days from the date funds were debited from your external account. From an operational perspective, it takes about 3 business days for funds to settle, then remain “on-risk” of being returned for 2 business days.If you choose to pre-fund your YieldStreet Wallet, your investment will go active sooner as you will not have to wait for external funds to settle. In this scenario, you can expect your investment to go Active within roughly 2 business days.",
      dkey: "27"
    },
    {
      list_item_title:
        "I have received a distribution for one of my investments, where does that money go?",
      description:
        "When you receive a payment distribution for one of your investments, you will be notified via email and the associated principal and/or interest payment will be deposited directly into your YieldStreet Wallet, if applicable, or to your external linked bank account.",
      dkey: "28"
    },
    {
      list_item_title: "How often will I receive payments?",
      description:
        "Check out this article about what you should expect during the lifetime of an investment.While some of our offerings have predefined payment schedules, paying monthly or quarterly, some have event-based payments. The anticipated payment is always outlined on the offering page of the investment offering as well as the Series Note Supplement or Investment Memorandum.Predefined ScheduleOfferings with predefined payment schedules pay at regular intervals (monthly, bi-weekly, quarterly, etc.). Please refer to each offering for the exact schedule. Depending on the offering, payments may be interest-only, or principal & interest. Please note that a monthly or bi-weekly payment schedule does not necessarily mean that payments will be made on the first and fifteenth of each month. Check out this infographic for more information.Event-Based PaymentsSome offerings have event-based payments. For example, portfolios of pre-settlement litigation advances are typically event-based. This means that investors receive payments as soon as individual cases within a portfolio settle. Those payment dates and amounts are not pre-determined because the timing of when the cases settle is uncertain. In a portfolio, because there are multiple cases, an investor can expect to receive multiple payments throughout the term. For our investment offerings with one case you will only receive one payment upon final settlement.Payments are not guaranteed and may be subject to delay or total loss. See the risk factors for each applicable offering for more details.",
      dkey: "29"
    },
    {
      list_item_title:
        "What is the difference between earned, accrued, and paid interest?",
      description:
        "Earned interest is the rate of interest that an investment is earning for you. If you invest $1,000 in an investment that earns 10% per year, for example, your earned interest that year will be 10%, or $100.Accrued interest, or interest balance, is interest that an investment is earning, but that you have not collected yet. In a savings account, for example, interest on your balance accrues every day, but is only credited to your account at the end of the month. Your savings are earning that accrued interest every day, but you can’t spend the interest until the bank puts it into your account. A YieldStreet investment that pays interest monthly works the same way. You accrue interest all month and you receive it on the payment date.Paid interest is interest that you have received as payment into your account; at that point it is no longer accrued interest.",
      dkey: "30"
    }
  ],
  [
    {
      list_item_title: "Do these investments have risk?",
      description:
        "Like any investment, investment offerings on YieldStreet carry investment risk, which should be evaluated on a case-by-case basis and prospective investors are urged to read the risk factors for each applicable offering. We strive to list investments on YieldStreet that are backed by strong collateral, provide attractive returns and have low correlation to the overall stock market.Moreover, YieldStreet works to assess investment risk by having a stringent process for vetting our borrowers and originators, and we make each deal transparent to our investors. Our diligence process includes vetting the management team of the originator in addition to their experience and expertise in the asset type. We are highly selective on the originators that we choose to work with. Originators typically have several years of experience. YieldStreet has a thorough vetting process through third parties that evaluates our originators’ financials, track record, and more factors.Here are a few other risk factors you should be aware of:Default Risk: The risk that the borrower will not be able to repay the associated interest and principal on a particular loan.Principal Risk: The possibility that a lender won’t get back some or all of the principal balance, the amount that they had originally invested.Duration Risk: The borrower could pay back the loan amount earlier or later than the expected offering length. All durations associated with YieldStreet investment offerings are “target durations” and while we do everything we can to hit those targets, in certain situations, an offering can end or extend before or after that target duration.Inconvenience Risk: Investors will not have access to their funds until the investment fully matures, thus reducing liquidity. In addition, some of our litigation investment offerings produce event-based payments which reduce payment schedule predictability.",
      dkey: "31"
    },
    {
      list_item_title: "Who are typical YieldStreet borrowers?",
      description:
        "Many deserving borrowers have financial needs that may fall outside the strict lending criteria of a traditional bank. They need a reliable source of capital, but aspects like smaller deal sizes or a tight turnaround can cause them to be turned away by traditional funding sources.That’s where YieldStreet comes in. We utilize our technology, data and experience in asset-based lending to identify high quality opportunities.While these individuals and companies may not fit into the traditional “credit box” required by traditional banks, the loans often have strong collateral and the companies have a diversified customer and supplier base, strong market share, a high degree of diversified recurring revenue and strong management teams.",
      dkey: "32"
    },
    {
      list_item_title: "Can the loans be repaid early?",
      description:
        "Yes, borrowers can repay loans early. Our mission is to connect borrowers and investors for a mutually beneficial relationship and outcome. If borrowers are successful and want to prepay their loans, they are able to do so. In most cases, there will not be a penalty for early repayment.  Durations listed for each investment offering are target durations, but we strive to meet them.",
      dkey: "33"
    },
    {
      list_item_title: "What happens if a borrower defaults?",
      description:
        "Investment offerings listed on YieldStreet carry a certain amount of risk, which should be carefully considered on a case-by-case basis and prospective investors are urged to read the risk factors for each applicable offering. All opportunities on YieldStreet are asset-based, which means they are backed by an underlying asset such as a real estate property, marine vessel or legal settlement. In the event that a default does occur, YieldStreet works with the originator who would take legal action to recoup as much of the principal capital and outstanding interest as possible via the secured assets. In certain default situations, depending on the amount of and the seniority of the loan, it is important to note that you may not be able to recover the full outstanding amount of the loan.At YieldStreet we go to great lengths to structure our investment offerings to protect your principal. For example, lenders have legal recourse to pursue guarantees and collateral pledged by the borrower.To date, YieldStreet is proud to report that we have experienced $0 principal loss for all active investments.",
      dkey: "34"
    },
    {
      list_item_title: "First Lien, Senior Secured and Subordinated Debt",
      description:
        "When you invest in debt, it’s critical for you to know whether the debt is “first lien,” “senior secured” or “subordinated” debt. This tells you where you stand in line to be paid back in the event that the borrower fails to pay back the loan.Not all senior debt holders are created equal, however. First lien debt holders are paid back before all other debt holders, including other senior debt holders. A lien is the legal right of a creditor to seize property from a borrower that has failed to repay the creditor. The creditor may exercise the lien by selling the property if the loan is not paid back.It’s important to bear in mind, however, that even first-lien debt holders may not get all their money back if a borrower is unable to raise enough money from the sale of its collateral to pay them. That’s why it’s so important before investing in any loan to make sure the loan is backed by significant collateral in the form of real, tangible assets.All senior debt has priority over subordinated debt, which is also known as “junior debt.” In the case of default, creditors holding subordinated debt wouldn’t get paid until all senior debt holders are paid in full. This makes subordinated debt more risky than senior secured debt, therefore it typically pays a higher yield.Debt is often issued in “tranches,” which are chunks of the debt organized into groups according to their seniority. A loan to a real-estate developer, for example, might include tranches of first-lien debt, second-lien debt and subordinated debt, with each tranche paying a different yield and carrying a different level of risk.",
      dkey: "35"
    },
    {
      list_item_title: "Are my documents secure?",
      description:
        "YieldStreet places great importance on keeping your information secure. We encrypt all personal information on our website and our technology team endeavors to utilize best practices for security sitewide. The identity information you provide on YieldStreet is stored by our third party financial provider, SynapseFI. Synapse stores all information submitted for KYC (know your customer) purposes. This includes SSN/EIN numbers, along with other documents provided, such as a government ID or Trust agreement, as applicable. All other information entered on our site is encrypted, and our team ensures that sufficient cyber security measures are in place. YieldStreet does not store the SSN/EIN numbers or physical documents.  Additionally, YieldStreet does not store or see banking information or bank login information for additional security. The login is actually a direct connection to your bank, and YieldStreet does not ever see or store this information.Coming in October 2018, YieldStreet will be incorporating a two factor Authentication system.",
      dkey: "36"
    },
    {
      list_item_title: "What are the criteria to become an originator?",
      description:
        "YieldStreet carefully selects each and every originator who posts deals on our platform. The YieldStreet team and our advisers have over 100 collective years of experience in originating, servicing and investing in specialty finance deals.We approve only originators and borrowers with the following characteristics:Deep expertise in the asset classProven track record of success and investor returnStrong management teamOperational expertise in underwriting practices, portfolio servicing capabilities and asset valuation capabilityPlease contact us if you meet these criteria and want to be an Originator on our platform.",
      dkey: "37"
    },
    {
      list_item_title: "What happens if YieldStreet goes into bankruptcy?",
      description:
        "YieldStreet works with asset managers and loan originators who have extensive experience in their field who service the loans. YieldStreet is a manager of the SPV (special purpose vehicle) or issuer of Borrower Payment Dependent Notes which are bankruptcy remote from YieldStreet Inc. The SPV or BPDN issuer is a company created with the sole purpose of keeping your investment secure, regardless of the originator or YieldStreet’s credit risk.For example, in an SPV, if anything were to happen to our company, a new manager, such as the originator, would be appointed for the SPV and take over management responsibilities, and would also receive the associated management fees and you would continue to hold the investment.",
      dkey: "38"
    }
  ],
  [
    {
      list_item_title: "What is YieldStreet Wallet?",
      description:
        "YieldStreet Wallet allows you to upgrade your cash with a savings account that earns 2.2% annual interest on funds held at YieldStreet, regardless of your accreditation status.",
      dkey: "39"
    },
    {
      list_item_title: "2.2% on my funds? This is great!",
      description:
        "We know. At YieldStreet we strive to create value for you, our investors, at every step of your journey. This not only provides what we feel is a highly competitive rate for cash held (more than 17x the national average) but helps make future investments on YieldStreet seamless and easy.",
      dkey: "40"
    },
    {
      list_item_title: "How does it work?",
      description:
        "After signing up and completing your KYC verification to open your YieldStreet account, you can connect an external bank account and transfer funds into your YieldStreet Wallet. After you initiate a transfer, you’ll start to earn interest once the funds settle in your account, with no extra work required from you.",
      dkey: "41"
    },
    {
      list_item_title: "How many times can I withdraw my funds?",
      description:
        "YieldStreet Wallet operates as a savings account, so you are able to withdraw or transact your funds a maximum of six times per month. These are standard banking restrictions you would have with any savings account per federal law. We’ll warn you if you ever get close to the limit. You can deposit additional funds as many times as you’d like per month and this does not count towards your 6 transaction limit. It’s important to note that there are also no transaction fees associated with the account.In the event you do reach a transaction limit within a calendar month, you will still be able to participate in new investment offerings, if desired. Additional funds will simply be pulled from your connected bank account or accepted via wire transfer.",
      dkey: "42"
    },
    {
      list_item_title: "Is there a min/max to how much I can hold?",
      description:
        "Nope! Hold as much or as little cash as you want, there is no minimum balance requirement. All funds held will automatically earn the 2.2% annual interest rate. See “Are my funds insured?” below.",
      dkey: "43"
    },
    {
      list_item_title: "Are the funds taxed?",
      description:
        "Yes. A 1099 INT will be distributed to each YieldStreet Wallet user during tax season.",
      dkey: "44"
    },
    {
      list_item_title: "How often is interest deposited?",
      description:
        "Interest is deposited monthly and compounds daily at 2.2% APY.",
      dkey: "45"
    },
    {
      list_item_title: "Are my funds insured?",
      description:
        "Yes. Your YieldStreet Wallet is an account held at Evolve Bank & Trust, which is an FDIC insured bank. This means that funds deposited in YieldStreet Wallet are insured up to the maximum allowed by law, which is currently $250,000 for an individually-owned account.",
      dkey: "46"
    },
    {
      list_item_title: "Do I need to be accredited?",
      description:
        "Nope. We are proud to offer this product to both accredited and non-accredited investors. This is the first step towards opening our YieldStreet community for everyone, with additional products to come.",
      key: "47"
    },
    {
      list_item_title: "How quickly will I start earning interest?",
      description:
        "It can take up to five business days for funds to arrive in your Wallet. Once funds are in your Wallet, they will earn daily interest, paid monthly.",
      dkey: "48"
    },
    {
      list_item_title: "Why do I need to provide a photo ID?",
      description:
        "In order to hold funds, additional Know Your Customer (KYC) efforts are required, including validating your identity via a government issued photo ID.",
      dkey: "49"
    },
    {
      list_item_title: "Will YieldStreet Wallet speed up my investing process?",
      description:
        "Yes. Now that you can hold a cash balance in your YieldStreet account, you can fund your account at any time to cover your next few investments so you don’t have to worry about timing ACH transfers.As you make new investments, your payment and distribution accounts will be automatically set to your YieldStreet account. If your account is funded, these transactions will be virtually instantaneous, whereas ACH transactions can take 1-2 days to settle, meaning you can start to earn interest faster.",
      dkey: "50"
    },
    {
      list_item_title:
        "What if I prefer receiving deposits directly to my external bank account?",
      description:
        "YieldStreet is intending to migrate all investors to this feature. You will still receive payment notifications whenever funds have been deposited to your YieldStreet account, and you can withdraw funds to your external bank account as desired.",
      dkey: "51"
    }
  ],
  [
    {
      list_item_title: "How are investment offerings structured?",
      description:
        "Depending on the investment offering, investor capital goes to a newly-formed Special Purpose Vehicle (SPV) or Borrower Payment Dependent Note (BPDN).SPV (Special Purpose Vehicle)A SPV, or special purpose vehicle is an investment structure that is technically a subsidiary of the company that created it (YieldStreet). For more on SPVs check out our article here. That means it is reported on a separate balance sheet, has a scope that is just a subset of the parent company’s activities and is financially independent of the parent company and from other SPVs under the parent’s umbrella. Essentially, each investment structured as an SPV is its own limited liability corporation (LLC).YieldStreet acts as the managing member of each SPV, which in the simplest terms means we service and distribute the funds and inform investors of any important administrative matters. If any complications arise in the portfolio, YieldStreet, as managing member, will handle them.The ownership of an SPV is split among all investors in the offering at a basis corresponding to your contribution to the deal. Similarly, when the borrower starts paying interest it is to the investors on a pro-rata basis on an agreed payment frequency.For example, if the borrower is raising $100,000 and you invest $10,000 in the offering, you will own 10% of the SPV and the underlying loan. If the loan pays 10% interest per year, you will receive $1,000 in interest for each year that the loan is outstanding.Borrower Payment Dependent Notes (BPDN)Borrower Payment Dependent Notes (BPDN) are debt obligations of YieldStreet that are tied to the performance of a loan made by YieldStreet. BPDN helps YieldStreet structure debt transactions more efficiently by allowing for a greater number of investors in a given transaction, and lower minimum investments. For more on BPDN, check out our article here.YieldStreet’s BPDN structure does not have the same member limitations as investing directly in an SPV and will permit YieldStreet to have more than 99 participating investors in BPDN offerings.For each BPDN offering, a new SPV will be formed as a wholly-owned subsidiary of the BPDN Issuer (i.e. the Issuer will create Series 1 SPV). That SPV exists to fund, acquire and originate a loan with a borrower, or enter into a participation agreement directly with the originator of a loan (such loan or participation, the corresponding asset).",
      dkey: "52"
    },
    {
      list_item_title: "What are the fund expenses?",
      description:
        "Check out this video to learn about YieldStreet’s fund expenses.Both SPV and BPDN investment offerings require specific expenses – regardless of the asset class or the size of your investment.Yearly financial audits for YieldStreet are completed for each active SPV by a third party PCAOB compliant firm. These detailed audits are completed to comply with registered investment adviser requirements and ensure that accounting for the SPV has been completed in accordance with GAAP standards.In an offering with an SPV structure, the first-year expense is $150 and then $70 in subsequent years. BPDN offerings carry a $100 expense in year 1 and $30 in subsequent years. Your initial interest distributions for all investments each year are first applied to fund expenses. Once this expense is satisfied, future interest distributions are made directly to your account. Once the expense to the fund is paid, you can expect to earn interest payments as usual.These annual expenses are included to cover mandated regulatory filings and related fees.  Some of these charges include Form D filings, State blue sky filings, the fund’s annual Delaware franchise fee, audit fees associated with the fund’s tax returns, out-of-pocket legal fees and expenses, if any, incurred to structure and document any SPV loan or participation, and trustee fees, if applicable.",
      dkey: "53"
    },
    {
      list_item_title: "What rights do I have in the BPDN structure?",
      description:
        "Just like with the SPV structure, the BPDN structure operates independently from YieldStreet. If the BPDN Issuer were to go bankrupt, the Trustee under the BPDN Indenture can foreclose on the collateral pledged to it with respect to the associated SPV (i.e. the equity in the SPV owned by the BPDN Issuer). In this scenario, upon the Trustee seizing the collateral, the Trustee would then own the equity in the applicable SPV which in turn owns the corresponding asset (i.e. the loan or participation interest). The Trustee acts for the benefit of the noteholders.  However, the noteholders would have the right to elect a managing member or servicer just as they would with the SPV structure.In a scenario where an originator or borrower experienced a default, the same servicing standard would occur as it does today in an SPV structure. The Indenture sets forth a servicing standard which essentially requires the servicer to use commercially reasonable efforts to service and collect the corresponding asset. In addition, in the event of a bankruptcy or insolvency event with respect to the BPDN Issuer, the Trustee will step in as paying agent under the notes.",
      dkey: "54"
    },
    {
      list_item_title:
        "How can I tell whether an offering is a SPV or BPDN structure?",
      description:
        "All offerings are clearly denoted as SPV or BPDN on the associated offering page when they are announced on the platform.",
      dkey: "55"
    },
    {
      list_item_title:
        "What is the legal structure of a Borrower Payment Dependent Notes (BPDN) offering?",
      description:
        "YieldStreet’s BPDN structure does not have the same member limitations as investing directly in an SPV and will permit YieldStreet to have more than 99 participating investors in BPDN offerings.For each BPDN offering, a new SPV will be formed as a wholly-owned subsidiary of the BPDN Issuer (i.e., the Issuer will create Series 1 SPV). That SPV exists to fund, acquire and originate a loan with a borrower, or enter into a participation agreement directly with the originator of a loan (such loan or participation, the Corresponding Asset).The BPDN Issuer will then issue a Borrower Payment Dependent Note associated with that specific SPV (i.e. Debt Note 1) and Corresponding Asset directly to investors (the debt note holders). Once the investment is fully allocated and funded on the Platform, the BPDN Issuer will pledge 100% of its equity in the SPV to the Trustee under the Indenture for the benefit of the associated debt noteholders.The Trustee is the Delaware Trust Company, which acts as the secured party with respect to the pledge of the equity interest in the associated SPV for the benefit of the BPDN noteholders.",
      dkey: "56"
    },
    {
      list_item_title: "Why does a SPV (or SPE) require a yearly audit?",
      description:
        "Yearly financial audits for YieldStreet are completed for each active SPV by a third party PCAOB compliant firm. These detailed audits are completed to comply with registered investment advisor requirements and ensure that accounting for the SPV has been completed in accordance with GAAP standards. These detailed audits are made available annually to participating Class A investors for each SPV they participate in.",
      dkey: "57"
    }
  ],
  [
    {
      list_item_title:
        "Do all cases in a litigation portfolio need to settle for me to recover my principal?",
      description:
        "Not necessarily. Our originators may maintain an equity interest in the portfolio, which creates a potential ‘buffer’ for investors. The size of the buffer may vary, but generally investors are paid first as cash from settlements comes in and could receive all principal and target interest before all cases in the portfolio come to a conclusion.",
      dkey: "58"
    },
    {
      list_item_title:
        "Where can I find all relevant documentation for an investment offering?",
      description:
        "The following relevant documents for each offering can be found at the bottom of each individual offering page: in an SPV offering, the Investment Memorandum and Subscription Agreement; in a BPDN offering, the Private Placement Memorandum, the Indenture, the Series Note Supplement and the Subscription Agreement. Note that you must be logged in to the YieldStreet platform in order to access these documents.",
      dkey: "59"
    },
    {
      list_item_title: "Are all quoted target returns per annum?",
      description:
        "Yes, all quoted target returns are per annum, and net of all listing and management fees. However, fund expenses are externally required regardless of an investment’s performance and as such are not subtracted from the advertised target yield.",
      dkey: "60"
    },
    {
      list_item_title:
        "Does YieldStreet accept investments from foreign investors or US citizens living abroad?",
      description:
        "Yes, but you must meet the requirements as an accredited investor, hold a valid SSN or TIN/EIN, have a US based address and US based bank account to be eligible to invest on YieldStreet.",
      dkey: "61"
    }
  ]
];
const Panel = Collapse.Panel;
export default class Section extends Component<
  ICommentFromProps,
  ISectionState
> {
  constructor(props: Readonly<ICommentFromProps>) {
    super(props);
  }
  public state = {
    visible: false,
    value: "https://app.brite.us",
    copied: false
  };
  hide = () => {
    this.setState({
      visible: false
    });
  };
  handleVisibleChange = (visible: boolean) => {
    this.setState({ visible });
  };
  onCopy = () => {
    this.setState({ copied: true });
  };
  render() {
    return (
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="faq-section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>
          <Collapse bordered={false}>
            {faqContentItems[this.props.section_id].map(element => {
              return (
                <Panel
                  className="faq-content-item"
                  header={
                    <div>
                      <div>{element.list_item_title}</div>
                    </div>
                  }
                  key={element.list_item_title}
                >
                  <div>{element.description}</div>

                  <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                    <Popover
                      content={
                        <a style={{ color: "black" }} onClick={this.hide}>
                          The Link is copied!
                        </a>
                      }
                      trigger="click"
                      visible={this.state.visible}
                      onVisibleChange={this.handleVisibleChange}
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        className="fa-image absolute section-chain-icon"
                        style={{
                          width: "30px",
                          height: "40px"
                        }}
                      />
                    </Popover>
                  </CopyToClipboard>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    );
  }
}
//
// "strict": true,
