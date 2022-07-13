const freelancerAnnonceMatchTemplate = (data) => {
  return {
    subject: `${data.firstname}, une nouvelle annonce peut vous correspondre`,
    body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
       <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="format-detection" content="telephone=no">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${data.firstname}, cette annonce peut vous correspondre</title>
          <style type="text/css" emogrify="no">#outlook a { padding:0; } .ExternalClass { width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } table td { border-collapse: collapse; mso-line-height-rule: exactly; } .editable.image { font-size: 0 !important; line-height: 0 !important; } .nl2go_preheader { display: none !important; mso-hide:all !important; mso-line-height-rule: exactly; visibility: hidden !important; line-height: 0px !important; font-size: 0px !important; } body { width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; } img { outline:none; text-decoration:none; -ms-interpolation-mode: bicubic; } a img { border:none; } table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; } th { font-weight: normal; text-align: left; } *[class="gmail-fix"] { display: none !important; } </style>
          <!--[if !mso]><!-->
          <style type="text/css" emogrify="no">@import url("https://fonts.googleapis.com/css2?family=Montserrat"); </style>
          <!--<![endif]-->
          <style type="text/css">p, h1, h2, h3, h4, ol, ul { margin: 0; } a, a:link { color: #0092ff; text-decoration: underline } .nl2go-default-textstyle { color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5 } .default-button { border-radius: 4px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; font-style: normal; font-weight: bold; line-height: 1.15; text-decoration: none; width: 50% } .default-heading1 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 36px } .default-heading2 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 32px } .default-heading3 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 24px } .default-heading4 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 18px } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } .no-show-for-you { border: none; display: none; float: none; font-size: 0; height: 0; line-height: 0; max-height: 0; mso-hide: all; overflow: hidden; table-layout: fixed; visibility: hidden; width: 0; } </style>
          <!--[if mso]>
          <xml>
             <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
             </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <style type="text/css">a:link{color: #0092ff; text-decoration: underline}</style>
       </head>
       <body text="#3b3f44" link="#0092ff" yahoo="fix" style="">
          <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%" style="width: 100%;">
             <tr>
                <td align="center" class="r0-c">
                   <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" class="r1-o" style="table-layout: fixed; width: 600px;">
                      <tr>
                         <td valign="top" class="">
                            <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                               <tr>
                                  <td class="r2-c" align="center">
                                     <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o" style="table-layout: fixed; width: 100%;">
                                        <!-- -->
                                        <tr class="nl2go-responsive-hide">
                                           <td height="20" style="font-size: 20px; line-height: 20px; background-color: #ffffff;">­</td>
                                        </tr>
                                        <tr>
                                           <td class="r4-i" style="background-color: #ffffff;">
                                              <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                 <tr>
                                                    <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                       <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                          <!-- -->
                                                          <tr>
                                                             <td class="nl2go-responsive-hide" width="15" style="font-size: 0px; line-height: 1px;">­ </td>
                                                             <td valign="top" class="r7-i">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                                   <tr>
                                                                      <td class="r8-c" align="center">
                                                                         <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="200" class="r9-o" style="table-layout: fixed; width: 200px;">
                                                                            <tr class="nl2go-responsive-hide">
                                                                               <td height="15" style="font-size: 15px; line-height: 15px;">­</td>
                                                                            </tr>
                                                                            <tr>
                                                                               <td class="r10-i" style="font-size: 0px; line-height: 0px;"> <img src="https://img.mailinblue.com/4840788/images/content_library/original/62ce81f58fb6f669ea6ce555.png" width="200" border="0" class="" style="display: block; width: 100%;"></td>
                                                                            </tr>
                                                                            <tr class="nl2go-responsive-hide">
                                                                               <td height="15" style="font-size: 15px; line-height: 15px;">­</td>
                                                                            </tr>
                                                                         </table>
                                                                      </td>
                                                                   </tr>
                                                                </table>
                                                             </td>
                                                             <td class="nl2go-responsive-hide" width="15" style="font-size: 0px; line-height: 1px;">­ </td>
                                                          </tr>
                                                       </table>
                                                    </th>
                                                 </tr>
                                              </table>
                                           </td>
                                        </tr>
                                        <tr class="nl2go-responsive-hide">
                                           <td height="20" style="font-size: 20px; line-height: 20px; background-color: #ffffff;">­</td>
                                        </tr>
                                     </table>
                                  </td>
                               </tr>
                               <tr>
                                  <td class="r2-c" align="center">
                                     <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o" style="table-layout: fixed; width: 100%;">
                                        <!-- -->
                                        <tr class="nl2go-responsive-hide">
                                           <td height="20" style="font-size: 20px; line-height: 20px; background-color: #ffffff;">­</td>
                                        </tr>
                                        <tr>
                                           <td class="r11-i" style="background-color: #ffffff;">
                                              <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                 <tr>
                                                    <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                       <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                          <!-- -->
                                                          <tr>
                                                             <td valign="top" class="r7-i">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                                   <tr>
                                                                      <td class="r12-c" align="left">
                                                                         <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r13-o" style="table-layout: fixed; width: 100%;">
                                                                            <tr class="nl2go-responsive-hide">
                                                                               <td height="15" style="font-size: 15px; line-height: 15px;">­</td>
                                                                            </tr>
                                                                            <tr>
                                                                               <td align="center" valign="top" class="r14-i nl2go-default-textstyle" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; text-align: center;">
                                                                                  <div>
                                                                                     <h1 class="default-heading1" style="margin: 0; color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 36px;">${data.firstname}, cette annonce peut vous correspondre</h1>
                                                                                  </div>
                                                                               </td>
                                                                            </tr>
                                                                         </table>
                                                                      </td>
                                                                   </tr>
                                                                </table>
                                                             </td>
                                                          </tr>
                                                       </table>
                                                    </th>
                                                 </tr>
                                              </table>
                                           </td>
                                        </tr>
                                        <tr class="nl2go-responsive-hide">
                                           <td height="20" style="font-size: 20px; line-height: 20px; background-color: #ffffff;">­</td>
                                        </tr>
                                     </table>
                                  </td>
                               </tr>
                               <tr>
                                  <td class="r2-c" align="center">
                                     <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o" style="table-layout: fixed; width: 100%;">
                                        <!-- -->
                                        <tr class="nl2go-responsive-hide">
                                           <td height="20" style="font-size: 20px; line-height: 20px; background-color: #eff2f7;">­</td>
                                        </tr>
                                        <tr>
                                           <td class="r15-i" style="background-color: #eff2f7;">
                                              <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                 <tr>
                                                    <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                       <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                          <!-- -->
                                                          <tr>
                                                             <td class="nl2go-responsive-hide" width="15" style="font-size: 0px; line-height: 1px;">­ </td>
                                                             <td valign="top" class="r7-i">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                                   <tr>
                                                                      <td class="r12-c" align="left">
                                                                         <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r13-o" style="table-layout: fixed; width: 100%;">
                                                                            <tr class="nl2go-responsive-hide">
                                                                               <td height="15" style="font-size: 15px; line-height: 15px;">­</td>
                                                                            </tr>
                                                                            <tr>
                                                                               <td align="left" valign="top" class="r16-i nl2go-default-textstyle" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; text-align: left;">
                                                                                  <div>
                                                                                     <h1 class="default-heading1" style="margin: 0; color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 36px;">${data.annonce.title}</h1>
                                                                                     <p style="margin: 0;">Description: ${data.annonce.description}</p>
                                                                                     <p style="margin: 0;">Prix Horaire:${data.annonce.price} €/h</p>
                                                                                  </div>
                                                                               </td>
                                                                            </tr>
                                                                            <tr class="nl2go-responsive-hide">
                                                                               <td height="15" style="font-size: 15px; line-height: 15px;">­</td>
                                                                            </tr>
                                                                         </table>
                                                                      </td>
                                                                   </tr>
                                                                   <tr>
                                                                      <td class="r2-c" align="center">
                                                                         <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="285" class="r17-o" style="table-layout: fixed; width: 285px;">
                                                                            <tr class="nl2go-responsive-hide">
                                                                               <td height="15" style="font-size: 15px; line-height: 15px;">­</td>
                                                                            </tr>
                                                                            <tr>
                                                                               <td height="18" align="center" valign="top" class="r18-i nl2go-default-textstyle" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5;">
                                                                                  <!--[if mso]> 
                                                                                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="v-text-anchor:middle; height: 43px; width: 284px;" arcsize="10%" fillcolor="#a7197f" strokecolor="#a7197f" strokeweight="1px" data-btn="1">
                                                                                     <w:anchorlock/>
                                                                                     <div style="display:none;">
                                                                                        <center class="default-button">
                                                                                           <p>Faire une proposition</p>
                                                                                        </center>
                                                                                     </div>
                                                                                  </v:roundrect>
                                                                                  <![endif]-->  <!--[if !mso]><!-- --> 
                                                                                  <a class="r19-r default-button" target="_blank" data-btn="1" style="font-style: normal; font-weight: bold; line-height: 1.15; text-decoration: none; border-style: solid; display: inline-block; -webkit-text-size-adjust: none; mso-hide: all; background-color: #a7197f; border-color: #a7197f; border-radius: 4px; border-width: 1px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; height: 18px; padding-bottom: 12px; padding-left: 5px; padding-right: 5px; padding-top: 12px; width: 273px;">
                                                                                     <p style="margin: 0;">Faire une proposition</p>
                                                                                  </a>
                                                                                  <!--<![endif]--> 
                                                                               </td>
                                                                            </tr>
                                                                            <tr class="nl2go-responsive-hide">
                                                                               <td height="15" style="font-size: 15px; line-height: 15px;">­</td>
                                                                            </tr>
                                                                         </table>
                                                                      </td>
                                                                   </tr>
                                                                </table>
                                                             </td>
                                                             <td class="nl2go-responsive-hide" width="15" style="font-size: 0px; line-height: 1px;">­ </td>
                                                          </tr>
                                                       </table>
                                                    </th>
                                                 </tr>
                                              </table>
                                           </td>
                                        </tr>
                                        <tr class="nl2go-responsive-hide">
                                           <td height="20" style="font-size: 20px; line-height: 20px; background-color: #eff2f7;">­</td>
                                        </tr>
                                     </table>
                                  </td>
                               </tr>
                               <tr>
                                  <td class="r2-c" align="center">
                                     <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o" style="table-layout: fixed; width: 100%;">
                                        <!-- -->
                                        <tr class="nl2go-responsive-hide">
                                           <td height="20" style="font-size: 20px; line-height: 20px; background-color: #ffffff;">­</td>
                                        </tr>
                                        
                                       
                                     </table>
                                  </td>
                               </tr>
                            </table>
                         </td>
                      </tr>
                   </table>
                </td>
             </tr>
          </table>
       </body>
    </html>`,
  };
};

module.exports = freelancerAnnonceMatchTemplate;
