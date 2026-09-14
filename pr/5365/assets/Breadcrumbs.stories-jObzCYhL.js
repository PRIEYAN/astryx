import{i as e}from"./preload-helper-CT_b8DTk.js";import{F as t,P as n}from"./ime-Dy4QRKoo.js";import{c as r,t as i}from"./utils-CPeIlZn6.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{t as o}from"./Text-z8muYPH2.js";import{t as s}from"./Icon-CgG-b0IT.js";import{t as c}from"./Icon-eSRldnS4.js";import{d as l}from"./renderDropdownItems-CBPrRYCB.js";import{i as u}from"./Stack-B9pi7ZUb.js";import{t as d}from"./Layout-Dt4bRu5Z.js";import{t as f}from"./Text-Cy3vzSsU.js";import{vi as p,xi as m,yi as h}from"./iframe-OWqjpvqU.js";import{Ht as g,it as _,t as v,vt as y}from"./esm-CL1f8dHF.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{n(),p(),c(),d(),f(),i(),v(),b=a(),x={title:`Core/Breadcrumbs`,component:m,tags:[`autodocs`],argTypes:{separator:{control:`text`,description:`Separator between items`},label:{control:`text`,description:`Accessible label for the nav landmark`},variant:{control:`select`,options:[`default`,`supporting`],description:`Visual variant controlling text size and color`}}},S={render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/projects`,children:`Projects`}),(0,b.jsx)(h,{isCurrent:!0,children:`My Project`})]})},C={name:`RTL Slash Detection Control`,render:()=>(0,b.jsxs)(u,{gap:3,children:[(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/projects`,children:`Projects`}),(0,b.jsx)(h,{isCurrent:!0,children:`My Project`})]}),(0,b.jsx)(o,{type:`supporting`,children:`Control: and/or · 08/24 · /settings`})]})},w={render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{isCurrent:!0,children:`Settings`})]})},T={name:`Auto-detect Current`,render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/projects`,children:`Projects`}),(0,b.jsx)(h,{children:`Auto Current`})]})},E={render:()=>(0,b.jsxs)(m,{separator:`›`,children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/docs`,children:`Docs`}),(0,b.jsx)(h,{isCurrent:!0,children:`API Reference`})]})},D={name:`Mirrored Arrow Separator`,render:()=>(0,b.jsxs)(m,{separator:(0,b.jsx)(`span`,{...t(r.mirror),children:`→`}),children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/docs`,children:`Docs`}),(0,b.jsx)(h,{isCurrent:!0,children:`API Reference`})]})},O={render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,startIcon:(0,b.jsx)(_,{width:16,height:16,"aria-hidden":`true`}),children:`Home`}),(0,b.jsx)(h,{href:`/settings`,startIcon:(0,b.jsx)(g,{width:16,height:16,"aria-hidden":`true`}),children:`Settings`}),(0,b.jsx)(h,{isCurrent:!0,children:`Profile`})]})},k={render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,onClick:e=>{e.preventDefault(),console.log(`Navigate to Home`)},children:`Home`}),(0,b.jsx)(h,{href:`/projects`,onClick:e=>{e.preventDefault(),console.log(`Navigate to Projects`)},children:`Projects`}),(0,b.jsx)(h,{isCurrent:!0,children:`Detail`})]})},A={render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/products`,children:`Products`}),(0,b.jsx)(h,{href:`/products/electronics`,children:`Electronics`}),(0,b.jsx)(h,{href:`/products/electronics/phones`,children:`Phones`}),(0,b.jsx)(h,{isCurrent:!0,children:`iPhone 15 Pro`})]})},j={name:`Supporting Variant`,render:()=>(0,b.jsxs)(m,{variant:`supporting`,children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/projects`,children:`Projects`}),(0,b.jsx)(h,{isCurrent:!0,children:`My Project`})]})},M={name:`Supporting Variant with Icons`,render:()=>(0,b.jsxs)(m,{variant:`supporting`,children:[(0,b.jsx)(h,{href:`/`,startIcon:(0,b.jsx)(_,{width:14,height:14,"aria-hidden":`true`}),children:`Home`}),(0,b.jsx)(h,{href:`/projects`,startIcon:(0,b.jsx)(y,{width:14,height:14,"aria-hidden":`true`}),children:`Projects`}),(0,b.jsx)(h,{isCurrent:!0,children:`My Project`})]})},N={name:`Current on Middle Item`,render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{isCurrent:!0,children:`Projects`}),(0,b.jsx)(h,{href:`/projects/my-project/settings`,children:`Settings`})]})},P=[{label:`Design`,onClick:()=>console.log(`go /team/design`)},{label:`Engineering`,onClick:()=>console.log(`go /team/eng`)},{type:`divider`},{label:`Data`,icon:`chart`,onClick:()=>console.log(`go /team/data`)}],F={name:`Menu Crumb (data array)`,render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{menu:P,children:`Teams`}),(0,b.jsx)(h,{isCurrent:!0,children:`Overview`})]})},I={name:`Menu Crumb (composed children)`,render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{menu:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{label:`Overview`,onClick:()=>console.log(`overview`)}),(0,b.jsx)(l,{label:`Settings`,icon:`gear`,onClick:()=>console.log(`settings`)})]}),children:`Project`}),(0,b.jsx)(h,{isCurrent:!0,children:`Details`})]})},L={name:`Mirrored Icon Separator`,render:()=>(0,b.jsxs)(m,{separator:(0,b.jsx)(s,{icon:`chevronRight`,size:`xsm`,color:`secondary`,xstyle:r.mirror}),children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/docs`,children:`Docs`}),(0,b.jsx)(h,{isCurrent:!0,children:`API Reference`})]})},R={name:`Long Labels in a Narrow Container`,render:()=>(0,b.jsx)(`div`,{style:{width:320,outline:`1px dashed #ccc`},children:(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{href:`/reports`,children:`Quarterly Financial Reconciliation`}),(0,b.jsx)(h,{isCurrent:!0,children:`Consolidated Statement of Operations 2026 Q3`})]})})},z={render:()=>(0,b.jsx)(m,{children:(0,b.jsx)(h,{isCurrent:!0,children:`Only Page`})})},B=[{label:`Design`,onClick:()=>console.log(`go /team/design`)},{label:`Engineering`,isDisabled:!0},{type:`divider`},{label:`Data`,icon:`chart`,onClick:()=>console.log(`go /team/data`)}],V={name:`Menu Crumb (disabled item)`,render:()=>(0,b.jsxs)(m,{children:[(0,b.jsx)(h,{href:`/`,children:`Home`}),(0,b.jsx)(h,{menu:B,children:`Teams`}),(0,b.jsx)(h,{isCurrent:!0,children:`Overview`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`nav button`);t instanceof HTMLElement&&t.click()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
    </Breadcrumbs>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'RTL Slash Detection Control',
  render: () => <VStack gap={3}>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
        <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
      </Breadcrumbs>
      <Text type="supporting">Control: and/or · 08/24 · /settings</Text>
    </VStack>
}`,...C.parameters?.docs?.source},description:{story:`D6 should find only the two decorative Breadcrumb separators. The three
ordinary-text slashes are content, so they must remain unchanged in RTL.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Settings</BreadcrumbItem>
    </Breadcrumbs>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Auto-detect Current',
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem>Auto Current</BreadcrumbItem>
    </Breadcrumbs>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () =>
  // No rtlStyles.mirror here: U+203A has Unicode Bidi_Mirrored=Yes, so the
  // browser flips it under RTL already and an explicit mirror would undo that.
  <Breadcrumbs separator={'›'}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem isCurrent>API Reference</BreadcrumbItem>
    </Breadcrumbs>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Mirrored Arrow Separator',
  render: () =>
  // U+2192 has Bidi_Mirrored=No, so this contextual decoration needs one
  // explicit mirror. D6 verifies the full LTR-to-RTL relationship.
  <Breadcrumbs separator={<span {...stylex.props(rtlStyles.mirror)}>→</span>}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem isCurrent>API Reference</BreadcrumbItem>
    </Breadcrumbs>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/" startIcon={<HomeIcon width={16} height={16} aria-hidden="true" />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/settings" startIcon={<Cog6ToothIcon width={16} height={16} aria-hidden="true" />}>
        Settings
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>Profile</BreadcrumbItem>
    </Breadcrumbs>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/" onClick={e => {
      e.preventDefault();
      console.log('Navigate to Home');
    }}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/projects" onClick={e => {
      e.preventDefault();
      console.log('Navigate to Projects');
    }}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>Detail</BreadcrumbItem>
    </Breadcrumbs>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics/phones">
        Phones
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>iPhone 15 Pro</BreadcrumbItem>
    </Breadcrumbs>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Supporting Variant',
  render: () => <Breadcrumbs variant="supporting">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
    </Breadcrumbs>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Supporting Variant with Icons',
  render: () => <Breadcrumbs variant="supporting">
      <BreadcrumbItem href="/" startIcon={<HomeIcon width={14} height={14} aria-hidden="true" />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/projects" startIcon={<FolderIcon width={14} height={14} aria-hidden="true" />}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>My Project</BreadcrumbItem>
    </Breadcrumbs>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Current on Middle Item',
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Projects</BreadcrumbItem>
      <BreadcrumbItem href="/projects/my-project/settings">
        Settings
      </BreadcrumbItem>
    </Breadcrumbs>
}`,...N.parameters?.docs?.source},description:{story:`Shows \`isCurrent\` on a middle breadcrumb item rather than the last one.
This is useful when navigating to a child page that isn't represented
in the breadcrumb trail — the parent is still the "current" page in
the hierarchy.`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Menu Crumb (data array)',
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem menu={teamMenu}>Teams</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Overview</BreadcrumbItem>
    </Breadcrumbs>
}`,...F.parameters?.docs?.source},description:{story:"A mid-trail crumb can open a menu of sibling destinations. The `menu` prop\naccepts the SAME item API as `DropdownMenu` / `MoreMenu` / `ContextMenu`, so\nan existing `DropdownMenuOption[]` drops in verbatim. The crumb renders a\nlink-styled trigger with a trailing chevron; separators before and after are\nunaffected.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Menu Crumb (composed children)',
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem menu={<>
            <BreadcrumbMenuItem label="Overview" onClick={() => console.log('overview')} />
            <BreadcrumbMenuItem label="Settings" icon="gear" onClick={() => console.log('settings')} />
          </>}>
        Project
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>Details</BreadcrumbItem>
    </Breadcrumbs>
}`,...I.parameters?.docs?.source},description:{story:"The `menu` prop also accepts composed `BreadcrumbMenuItem` children (an alias\nof `DropdownMenuItem`), for dynamic or stateful menus.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Mirrored Icon Separator',
  render: () => <Breadcrumbs separator={<Icon icon="chevronRight" size="xsm" color="secondary" xstyle={rtlStyles.mirror} />}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem isCurrent>API Reference</BreadcrumbItem>
    </Breadcrumbs>
}`,...L.parameters?.docs?.source},description:{story:"An icon separator is an SVG, so the bidi algorithm never mirrors it the way it\nmirrors an angle-quote glyph such as `›`. A directional icon therefore needs\n`rtlStyles.mirror` through `xstyle`, or it points against the reading\ndirection in an RTL locale.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Long Labels in a Narrow Container',
  render: () => <div style={{
    width: 320,
    outline: '1px dashed #ccc'
  }}>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/reports">
          Quarterly Financial Reconciliation
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          Consolidated Statement of Operations 2026 Q3
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
}`,...R.parameters?.docs?.source},description:{story:`The trail wraps rather than collapsing behind an overflow control, so a long
label and a narrow container both reflow instead of clipping. Rendered in a
320px box, the narrowest width the responsive bar covers.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <BreadcrumbItem isCurrent>Only Page</BreadcrumbItem>
    </Breadcrumbs>
}`,...z.parameters?.docs?.source},description:{story:`A single crumb renders no separator, and an empty trail collapses to nothing
rather than leaving a blank row.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Menu Crumb (disabled item)',
  render: () => <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem menu={teamMenuWithDisabled}>Teams</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Overview</BreadcrumbItem>
    </Breadcrumbs>,
  play: async ({
    canvasElement
  }) => {
    const trigger = canvasElement.querySelector('nav button');
    if (trigger instanceof HTMLElement) {
      trigger.click();
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`A menu item can be disabled. The disabled row is what the A20 hover sweep and
the A21 cursor sweep measure on this component; without a story rendering one
neither has anything to check here.`,...V.parameters?.docs?.description}}},H=[`Default`,`SlashDetectionControl`,`TwoLevels`,`AutoDetectCurrent`,`CustomSeparator`,`MirroredArrowSeparator`,`WithIcons`,`WithOnClick`,`DeepHierarchy`,`SupportingVariant`,`SupportingWithIcons`,`CurrentOnMiddleItem`,`MenuCrumb`,`MenuCrumbComposed`,`MirroredIconSeparator`,`LongLabelsNarrow`,`SingleItem`,`MenuCrumbDisabledItem`]}))();export{T as AutoDetectCurrent,N as CurrentOnMiddleItem,E as CustomSeparator,A as DeepHierarchy,S as Default,R as LongLabelsNarrow,F as MenuCrumb,I as MenuCrumbComposed,V as MenuCrumbDisabledItem,D as MirroredArrowSeparator,L as MirroredIconSeparator,z as SingleItem,C as SlashDetectionControl,j as SupportingVariant,M as SupportingWithIcons,w as TwoLevels,O as WithIcons,k as WithOnClick,H as __namedExportsOrder,x as default};