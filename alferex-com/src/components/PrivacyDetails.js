/**
 *
 * ContactDetails
 *
 */

import React from 'react';
import {
  Header, Segment, Container, Divider, Accordion, Icon,
} from 'semantic-ui-react';

import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';


class PrivacyDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
    };
  }

  handleAccordianClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Segment vertical style={{ padding: '5em 0' }}>
        <Container>
          <Container>
            <Header as="h3">
              Owner and Data Controller
            </Header>
            <p> Alferex Industries Private Limited </p>
            #20, Shri Hari Villas, Near Adani Circle,
            <br />
            SP Ring Road, Ahmedabad - 382445
            <p>
              Email: info@alferex.com
            </p>
          </Container>
          <Divider />
          <Container>
            <Header as="h3">
              Types of Data collected
            </Header>
            <p>Among the types of Personal Data that www.alferex.com collects, by itself or through third parties, there are: email address, Cookies, Usage Data, and phone number.</p>
            <p>
              Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
              Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using www.alferex.com.
              Unless specified otherwise, all Data requested by www.alferex.com is mandatory and failure to provide this Data may make it impossible for www.alferex.com to provide its services. In cases where www.alferex.com specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.
              Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
              Any use of Cookies – or of other tracking tools – by www.alferex.com or by the owners of third-party services used by www.alferex.com serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
            </p>
            <p>
              Users are responsible for any third-party Personal Data obtained, published or shared through www.alferex.com and confirm that they have the third party&apos;s consent to provide the Data to the Owner.
            </p>
          </Container>
          <Divider />
          <Container>
            <Header as="h3">
              Mode and place of processing the Data
            </Header>
            <Header as="h5">
              Methods of processing
            </Header>
            <p>
              The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
  The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of www.alferex.com (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.
            </p>
            <Header as="h5">
              Legal basis of processing
            </Header>
            <p>
              The Owner may process Personal Data relating to Users if one of the following applies:
            </p>
            <ul>
              <li>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</li>
              <li>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</li>
              <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
              <li>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</li>
              <li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li>
            </ul>
            <p>
              In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
            </p>
            <Header as="h5">
              Place
            </Header>
            <p>
              The Data is processed at the Owner&apos;s operating offices and in any other places where the parties involved in the processing are located.
            </p>
            <p>
              Depending on the User&apos;s location, data transfers may involve transferring the User&apos;s Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.
            </p>
            <p>
              Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.
            </p>
            <p>
              If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.
            </p>
            <Header as="h5">
              Retention time
            </Header>
            <p>
              Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.
            </p>
            <p>
              Therefore:
            </p>
            <ul>
              <li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</li>
              <li>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of  this document or by contacting the Owner.</li>
            </ul>
            <p>
              The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.
            </p>
            <p>
              Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.
            </p>
          </Container>
          <Divider />
          <Container>
            <Header as="h3">
              The purposes of processing
            </Header>
            <p>
              The Data concerning the User is collected to allow the Owner to provide its Services, as well as for the following purposes: Managing support and contact requests, Contacting the User, Analytics, Remarketing and behavioral targeting, Location-based interactions, Traffic optimization and distribution, SPAM protection, Social features, Managing contacts and sending messages and Infrastructure monitoring.
            </p>
            <p>
              Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document.
            </p>
          </Container>
          <Divider />
          <Container>
            <Header as="h3">
              Detailed information on the processing of Personal Data
            </Header>
            <p>
              Personal Data is collected for the following purposes and using the following services:
            </p>
            <Accordion fluid styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleAccordianClick}>
                <Icon name="dropdown" />
                Analytics
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.
                </p>
                <Header as="h5">
                Google Analytics (Google Inc.)
                </Header>
                <p>
                  Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of www.alferex.com, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network.
                </p>
                <p>
                  Personal Data collected: Cookies and Usage Data.
                </p>
                <p>
                  Place of processing: United States –
                  <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank">Opt Out</a>.
                  Privacy Shield participant.
                </p>
                <Header as="h5">
                Facebook Ads conversion tracking (Facebook, Inc.)
                </Header>
                <p>Facebook Ads conversion tracking is an analytics service provided by Facebook, Inc. that connects data from the Facebook advertising network with actions performed on www.alferex.com.</p>
                <p>Personal Data collected: Cookies and Usage Data.</p>
                <p>
                  Place of processing:
                  United States
                  –
                  <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                  Privacy Shield participant.
                </p>
                <Header as="h5">
                Twitter Ads conversion tracking (Twitter, Inc.)
                </Header>
                <p>Twitter Ads conversion tracking is an analytics service provided by Twitter, Inc. that connects data from the Twitter advertising network with actions performed on www.alferex.com.</p>
                <p>Personal Data collected: Cookies and Usage Data.</p>
                <p>
                  Place of processing:
                  United States
                  –
                  <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                  Privacy Shield participant.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleAccordianClick}>
                <Icon name="dropdown" />
                Contacting the User
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <Header as="h5">
                Contact form (www.alferex.com)
                </Header>
                <p>
                By filling in the contact form with their Data, the User authorizes www.alferex.com to use these details to reply to requests for information, quotes or any other kind of request as indicated by the form’s header.
                </p>
                <p>
                Personal Data collected: email address.
                </p>
                <Header as="h5">
                Mailing list or newsletter (www.alferex.com)
                </Header>
                <p>
                By registering on the mailing list or for the newsletter, the User’s email address will be added to the contact list of those who may receive email messages containing information of commercial or promotional nature concerning www.alferex.com. Your email address might also be added to this list as a result of signing up to www.alferex.com or after making a purchase.
                </p>
                <p>
                Personal Data collected: email address.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleAccordianClick}>
                <Icon name="dropdown" />
                Remarketing and behavioral targeting
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 6}>
                <p>
                  This type of service allows www.alferex.com and its partners to inform, optimize and serve advertising based on past use of www.alferex.com by the User.
                </p>
                <p>
                  This activity is performed by tracking Usage Data and by using Cookies, information that is transferred to the partners that manage the remarketing and behavioral targeting activity.
                </p>
                <p>
                  Some services offer a remarketing option based on email address lists.
                </p>
                <p>
                In addition to any opt-out offered by any of the services below, the User may opt out of a third-party service&apos;s use of cookies by visiting the <a href="http://optout.networkadvertising.org/" target="_blank">Network Advertising Initiative opt-out page</a>
                </p>
                <Header as="h5">
                Facebook Remarketing (Facebook, Inc.)
                </Header>
                <p>
                  Facebook Remarketing is a remarketing and behavioral targeting service provided by Facebook, Inc. that connects the activity of www.alferex.com with the Facebook advertising network.
                </p>
                <p>
                  Personal Data collected: Cookies and Usage Data.
                </p>
                <p>
                  Place of processing:
                  United States
                  –
                  <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://www.aboutads.info/choices/" target="_blank">Opt Out</a>.
                  Privacy Shield participant.
                </p>
                <Header as="h5">
                Twitter Remarketing (Twitter, Inc.)
                </Header>
                <p>
                  Twitter Remarketing is a remarketing and behavioral targeting service provided by Twitter, Inc. that connects the activity of www.alferex.com with the Twitter advertising network.
                </p>
                <p>Personal Data collected: Cookies and Usage Data.</p>
                <p>
                  Place of processing:
                  United States
                  –
                  <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://support.twitter.com/articles/20170405" target="_blank">Opt Out</a>.
                  Privacy Shield participant.
                </p>
                <Header as="h5">
                Google Ads Remarketing (Google LLC)
                </Header>
                <p>
                  Google Ads Remarketing is a remarketing and behavioral targeting service provided by Google LLC that connects the activity of www.alferex.com with the Google Ads advertising network and the DoubleClick Cookie.
                </p>
                <p>Personal Data collected: Cookies and Usage Data.</p>
                <p>
                  Place of processing:
                  United States
                  –
                  <a href="http://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://www.google.com/settings/ads/onweb/optout" target="_blank">Opt Out</a>.
                  Privacy Shield participant.
                </p>
              </Accordion.Content>


              <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleAccordianClick}>
                <Icon name="dropdown" />
                SPAM protection
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 8}>
                <p>
                  This type of service analyzes the traffic of www.alferex.com, potentially containing Users' Personal Data, with the purpose of filtering it from parts of traffic, messages and content that are recognized as SPAM.
                </p>
                <Header as="h5">
                  Google reCAPTCHA (Google Inc.)
                </Header>
                <p>
                  Google reCAPTCHA is a SPAM protection service provided by Google Inc. The use of reCAPTCHA is subject to the Google <a href="https://www.google.com/policies/privacy/" target="_blank">privacy policy</a> and <a href="https://www.google.com/intl/en/policies/terms/" target="_blank">terms of use</a>.
                </p>
                <p>Personal Data collected: Cookies and Usage Data.</p>
                <p>
                  Place of processing:
                  United States
                  –
                  <a href="https://www.google.com/intl/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                  Privacy Shield participant.
                </p>
              </Accordion.Content>

            </Accordion>
          </Container>
          <Divider />
          <Container>
            <Header as="h3">
              The rights of Users
            </Header>
            <p>
              Users may exercise certain rights regarding their Data processed by the Owner.
            </p>
            <p>
              In particular, Users have the right to do the following:
            </p>
            <ul>
              <li><b>Withdraw their consent at any time.</b> Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</li>
              <li><b>Object to processing of their Data.</b> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.</li>
              <li><b>Access their Data.</b> Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.</li>
              <li><b>Verify and seek rectification.</b> Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</li>
              <li><b>Restrict the processing of their Data.</b> Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.</li>
              <li><b>Have their Personal Data deleted or otherwise removed.</b> Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.</li>
              <li><b>Receive their Data and have it transferred to another controller.</b> Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User&apos;s consent, on a contract which the User is part of or on pre-contractual obligations thereof.</li>
              <li><b>Lodge a complaint.</b> Users have the right to bring a claim before their competent data protection authority.</li>
            </ul>
            <Header as="h5">
              Details about the right to object to processing
            </Header>
            <p>
              Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.
            </p>
            <p>
              Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.
            </p>
            <Header as="h5">
              How to exercise these rights
            </Header>
            <p>
              Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.
            </p>
          </Container>

          <Divider />
          <Container>
            <Header as="h3">
              Additional information about Data collection and processing
            </Header>
            <Header as="h5">
              Legal action
            </Header>
            <p>
              The User&apos;s Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of www.alferex.com or the related Services. The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.
            </p>
            <Header as="h5">
              Additional information about User&apos;s Personal Data
            </Header>
            <p>
              In addition to the information contained in this privacy policy, www.alferex.com may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.
            </p>
            <Header as="h5">
              System logs and maintenance
            </Header>
            <p>
              For operation and maintenance purposes, www.alferex.com and any third-party services may collect files that record interaction with www.alferex.com (System logs) use other Personal Data (such as the IP Address) for this purpose.
            </p>
            <Header as="h5">
              Information not contained in this policy
            </Header>
            <p>
              More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.
            </p>
            <Header as="h5">
              How “Do Not Track” requests are handled
            </Header>
            <p>
              www.alferex.com does not support “Do Not Track” requests. To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.
            </p>
            <Header as="h5">
              Changes to this privacy policy
            </Header>
            <p>
              The Owner reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page and possibly within www.alferex.com and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.
            </p>
            <p>
              Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.
            </p>
          </Container>

          <Divider />
          <Container>
            <Header as="h3">
              Definitions and legal references
            </Header>
            <Header as="h5">
              Personal Data (or Data)
            </Header>
            <p>
              Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.
            </p>
            <Header as="h5">
              Usage Data
            </Header>
            <p>
              Information collected automatically through www.alferex.com (or third-party services employed in www.alferex.com), which can include: the IP addresses or domain names of the computers utilized by the Users who use www.alferex.com, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server&apos;s answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User&apos;s IT environment.
            </p>
            <Header as="h5">
              User
            </Header>
            <p>
              The individual using www.alferex.com who, unless otherwise specified, coincides with the Data Subject.
            </p>
            <Header as="h5">
              Data Subject
            </Header>
            <p>
              The natural person to whom the Personal Data refers.
            </p>
            <Header as="h5">
              Data Processor (or Data Supervisor)
            </Header>
            <p>
              The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.
            </p>
            <Header as="h5">
              Data Controller (or Owner)
            </Header>
            <p>
              The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of www.alferex.com. The Data Controller, unless otherwise specified, is the Owner of www.alferex.com.
            </p>
            <Header as="h5">
              www.alferex.com (or this Application)
            </Header>
            <p>
              The means by which the Personal Data of the User is collected and processed.
            </p>
            <Header as="h5">
              Service
            </Header>
            <p>
              The service provided by www.alferex.com as described in the relative terms (if available) and on this site/application.
            </p>
            <Header as="h5">
              European Union (or EU)
            </Header>
            <p>
              Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.
            </p>
            <Header as="h5">
              Cookies
            </Header>
            <p>
              Small sets of data stored in the User&apos;s device.
            </p>
            <Divider />
            <Header as="h5">
              Legal information
            </Header>
            <p>
              This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).
            </p>
            <p>
              This privacy policy relates solely to www.alferex.com, if not stated otherwise within this document.
            </p>
          </Container>
        </Container>
      </Segment>
    );
  }
}

export default PrivacyDetails;