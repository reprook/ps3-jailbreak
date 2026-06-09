# Update guide

## When a new PS3 firmware appears

1. Verify the Sony firmware version.
2. Verify PS3HEN support.
3. Add the matching HEN package inside `installer/<version>/HEN.pkg`.
4. Add a new page inside `firmware/`.
5. Update `data/versions.json`.
6. Test on a real PS3 before marking it supported.

## Current self-hosted installer

`installer/alternate.html`

Current included firmware folders:

- `installer/4.91/`
- `installer/4.92/`
- `installer/4.93/`
