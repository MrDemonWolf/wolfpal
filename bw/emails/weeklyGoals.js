const mjml = require('mjml');

/**
 *  @param completed
 *  @description Completed weekly goals count.
 *  @param total
 *  @description Total weekly goal count.
 *  @param percent
 *  @description Percent weekly goal count.
 */
module.exports = (completed, total, percent) =>
  mjml(`<mjml>
  <mj-body background-color="#ffffff">
    <mj-section>
      <mj-column>
        <mj-text font-style="bold" font-size="24px" color="#626262" align="center">
          Weekly Goals Stats
        </mj-text>
        <mj-divider border-color="#486EC2" />
      </mj-column>
    </mj-section>
    <mj-wrapper padding-top="0">
      <mj-section>
        <mj-column>
          <mj-text>
            You are receiving this because you opt in to receiving weekly goal stats emails.  If you want to opt out any time login into your acccount and disable them.
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-table>
            <tr>
              <td>Completed</td>
              <td>Total</td>
              <td>Percent</td>
            </tr>
            <tr>
              <td>
              ${completed}
              </td>
              <td>
              ${total}
              </td>
              <td>
              ${percent}%
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  </mj-body>
</mjml>`);
