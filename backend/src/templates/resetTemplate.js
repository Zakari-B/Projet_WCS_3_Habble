const resetTemplate = (resetLink) => {
  return {
    subject: "Réinitialisation de mot de passe",
    body: `
  <!DOCTYPE html>
  <html
    lang="en"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
  >
    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
        p {
          line-height: inherit;
        }
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
        @media (max-width: 660px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
          .icons-inner {
            text-align: center;
          }
          .icons-inner td {
            margin: 0 auto;
          }
          .image_block img.big,
          .row-content {
            width: 100% !important;
          }
          .mobile_hide {
            display: none;
          }
          .stack .column {
            width: 100%;
            display: block;
          }
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body
      style="
        background-color: #f8f8f9;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      "
    >
    <h1>Demande de réinitialisation de mot de passe</h1>
    <p>Bonjour, vous avez demandé à réinitialiser votre mot de passe. Vous pouvez le faire sur le lien suivant :</p>
    <p>${resetLink}</p>
    <p>Si cette demande ne provient pas de vous, vous pouvez ignorer cet email</p>
    </body>
    `,
  };
};

module.exports = resetTemplate;
