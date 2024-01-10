import { Component } from '@angular/core';
//import * as pdfMake from 'pdfmake/build/pdfmake';
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';
//pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent {
  // generatePDF() {
  //   const documentDefinition = {
  //     content: [
  //       { text: 'Customer Information', style: 'header' },
  //       { text: 'Customer Name: ' + this.customerName },
  //       { text: 'Customer Mail: ' + this.customerMail },
  //       { text: 'Customer Phone: ' + this.customerPhone },
  //       { text: '\n' }, // Add some spacing
  //       { text: 'Subscription Details', style: 'header' },
  //       { text: 'Subscription: ' + this.subscription },
  //       { text: '\n' }, // Add some spacing
  //       { text: 'Terms and Conditions', style: 'header' },
  //       { ul: [
  //         'Point 1 of Terms and Conditions',
  //         'Point 2 of Terms and Conditions',
  //         'Point 3 of Terms and Conditions',
  //         'Point 4 of Terms and Conditions',
  //         'Point 5 of Terms and Conditions',
  //       ]}
  //     ],

  //   pdfMake.createPdf(documentDefinition).open();
  // }
}
