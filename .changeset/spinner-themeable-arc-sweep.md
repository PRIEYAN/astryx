---
'@astryxdesign/core': patch
---

[feat] Spinner: the arc sweep is themeable through `--spinner-arc-fraction` (#5819)

`#5214` made the ring's diameter, stroke width and both colours themeable, but left how much of the circle the moving arc covers as a compiled-in constant. Sweep is the most visually distinctive property of the ring, and it was the one piece of its geometry a theme could not reach: a 135 degree arc and a 270 degree arc read as different spinners at the same diameter, stroke and colour.

The rule now composes the dash from a fifth public var on the existing `spinner` target, `--spinner-arc-fraction`, defaulting to the `0.375` the component has always drawn. Nothing moves for a theme that does not set it, and a themed sweep holds its proportion at every size because the lengths are still composed from the resolved diameter. The dash the SVG carries as a presentation attribute stays the default sweep, the same way `r` and `stroke-width` do, so a themed sweep applies from the frame the stylesheet applies in and a render with no stylesheet still draws an arc.

@PRIEYAN
