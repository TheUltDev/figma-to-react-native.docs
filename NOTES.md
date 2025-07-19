⚛ Documentation Notes for Figma to React Native ⚛
    > (will be user help tips)
    > Motion doc page is a great example of how he wants it done. 

# Designing 
- Step by step 'Hello World'
    - Create a frame (f) and draw it
    - Right click and create component (Control Alt K)
    - *** USE Auto layout (Shift A), All frames NEED auto layout or it will look bad ***
    > You can also click 'Add component' button and 'Create new', Name it, click create 
    - Hit 'T' (or T on keyboard) and hit inside component to start typing 'Hello World' 
    - Go to the right side panel. Expand on: Simple explanation of the tools in auto layout and appearance. 
- Themes
    - Creating theme
    - Can choose preset or custom color 
    - Once done, hit generate theme
    - Then create your variables
- Go back to 'Hello World' component once theme is created
    - Fill of component, (under library tab) white by default, but can type 'Background' and choose what color you'd like
    - Text, (under library tab still) can choose by typing 'Foreground' 
    - Now you can use light and dark (can change at the top under page) because themes are set up now 
    - Then show them how to add a border, select component, go to 'Stroke' and select the color thing, type 'Border' under library to add a colored border. 
- How to add an Icon
    - After you create your theme, you can browse icon sets, under the icon tab
    - Browse icon set button, select your set(s) and then click 'Import' 
    - Now you can search at the top what icon you want and drag/drop into your component 
    > You can change the width, by default the instance of that icon component had the 'Foreground theme color' just like text did. So when switching themes, you can have light/dark 
    >  Read here to dive more into the icon system! 
- Back to the 'Hello World' 
    - The plug in maps Figma component properties to React Native component properties. 
    - Example: Select component, select properties at the right-hand top on panel, the '+', choose 'Text'. Name it. Set value = hello world. Create. 
        - It is not used yet, so select text inside component, right beside text at the right top on the side. Click symbol, choose 'Greetings property' that you just created. 
    - Now instead of the text content being hard coded, it is passed at a property. This can be used for storybook/ doc pages/ preview.  
    - Creating a 'Boolean' property
        - It is located at the top right, hit the '+' and select boolean
        - Name boolean and value is just the default that will be displayed in storybook/preview etc. 
        - Right now the properties aren't used (Can tell by the! )
        - To use it, click on the icon layer, in the 'Appearance' panel, click the 3rd icon in that row. 
            - Click show icon properties 
        - You will notice the icon in the code is wrapped in a Conditional Render' (maybe have a code example)
        - Now if you go back to the component props on the right, and change the show icon default value to 'False', the icon will no longer show in the preview. BUT notice the code does NOT change. 
    - Creating a 'Home Screen' component 
        - Create a component
        - Go back to component list in the plugin. Drag the 'Hello World' component into the 'Home Screen' component. 
        - Now we are using an instance of hello world, ill notice it import the 'Hello World' component in the code. And passes props to it. 
        - You can then select the component instance, in the home screen component. And configure its properties (on the up right side panel) independently for this certain instance. 
        - You will see the code update once configured. 
    - You can nest as many instances as you like inside a component (i.e. Button inside a dialogue, inside a screen)

- 'Variant' Property (Hello World)
    - Select the HS component, go to props at the top and hit '+', choose 'Variant'
    - Rename 'Property 1' to 'Radius', name value to 'Square' 
    - Then click the add variant button (at the bottom of the component on the middle screen), after creating 2nd variant, rename it's value to 'Rounded' 
    - Then set border radius for 2nd one. 
    - Then go to the Home Screen (HS) component, go to the hello world instead HS comp. We can now choose (right side) between rounded and square 

- Still in 'Hello World'...'Instance Swap' Property
    - Select the home screen component, go to properties, and select instance swap (last one)
    - Name, value = (Pick your hello world component), click create property button
    - Select (on the left) the previous hello world we used, go to the top right panel, select the 2nd icon 'Apply instance swap property' you will see the button we just made and select it. 
    - Notice the hello world component is no longer imported, it is now passed as a property. 

    - Now if we go to the component list, we drag/drop the home screen to make an instance of it. (Unsure if should add this, kind of complex)
        - You can change what component is included in that slot (in the property button slot)

- Naming and Organization 
    - The following of these are mapped:
        - Page names -> base folder names (snake case)
        - Sections name -> subfolder name (snake case)
        - Figma component name -> React component name (pascal case)
        - Layer names -> Style sheet property names (camel case)
        - Figma component property names -> React component property names (camel case)
        - Figma component variant values -> React component variant values (title case)
        > Can put emojis in page names, they will show in the plugin list but will not be used in the file path. Will be stripped out in the code. 🌙

    - To Create a Section:
        - (Shift+ S) Click 2nd thing in the frame tool, select section icon. Drag mouse overall components that you would like in the section. 
        - Name the section whatever you'd like, that will override the subfolder name, which is 'base' by default. 
        > tip: (right side) Layout panel icon Resize to fit icon. It will conform everything together nicely. 
        - In a component plugin list, Pages are used as groups. Sections appear by the component name. 
            - You can search by: page, section, and component name. 
        - Everything is 2 layers deep. 'components' -> 'pages' -> 'sections' -> 'components'
            - if component is not in a section, it is named 'base' 
        - [Frame] component, apply auto layout to the frame with a fixed dimension. 
          - Now you can apply Fill dimension to the component. 
          > note the frame is only used for previews, it is not end up in the code. 


# Exporting
  - Options of (2nd symbol at the bottom right)
    - copying/downloading single files in the component previewer 
    - Downloading entire Zip of all converted components, including a cross platform template. 
    - Publishing to an existing Git repository
        > All git operations are client side, but you do need to specify the GitHub access token. 
      - The git branch you specify will be pulled and merged with your design changes (latest copy of that branch) 
      - A new branch will be created to submit a PR to merge into your repo. 
      - you will be able to see everything that differed
      - Right click again to close the diff view. 
      - a notification will show where you can compare the changes with your base. 
        > once a repo is configured for a project, right click and the component code editor in the plugin and select 'View Diff'!
        > Which will show the diff between the branch you specified and the current working changes. 
        > nice real time view of what is being changed. 
        > While viewing the tip, there is a slider in the component preview, where you can visually compare your changes!
      - You can always update Git settings, by clicking the cog ⚙ icon in the bottom right 

# Icons
 - Reference the design notes for some information 
 - Adding more Icon sets to your project:
    - Theme must be created before importing icons! As the icon set will use the theme foreground by default. (so dark and light mode work automatically)
    - Click the '+' button on the bottom left of the toolbar. 
    - Same view when we first browsed, you are able to select as many icon sets as you like.
    - Can filter sets by category by using the dropdown at the bottom
    - Can also search by name using the top left search button. (the 🔎)
    - **WARNING: Figma does NOT support importing thousands of icons at once, it will take some time and are done subsequently**
    - Can star/favorite icon sets which is synced to your Figma account, not to the project. (IE personal faves)
    - If icon set has already been added, it will be greyed out. 
    - When not adding sets, the drop down in the bottom toolbar allows you to filters either by sets or view all. 
       - When viewing a specific set, icons that are present in the set but missing in Figma are disabled/greyed out at the bottom. 
    - Most used icons will be shown first/top of list. Along with the amount they are used in the Figma project. 
    - If you are missing icon(s), hit the 69 symbol 🔁 next to the drop down. icons will be downloaded and added to existing icon set/page. 
    - To Delete icons: simply delete them in Figma, you can delete the whole icon set, the icon page, or individual icons. You can always add them back! 
    - Clicking an icon will copy the React Native code to use it, simply paste it into your code! 
      - You can also double click it and it will go to the corresponding Figma component on the icon's page (in the body)
    - Can drag and drop from the icon page to create an Instance. 
      > **the Figma components are ONLY placeholders, the icon ID, color, and size are needed. Importing all icons does NOT mean they will be included in your app. ONLY USED icons are bundled with your app.**
    - Setting the color or the dimension of the Figma icon component instance, will set the icon properties. 
    - Some icon sets, like Emojis and Flags, have their own colors so they do NOT use theme values. 
    - At this time, custom icon sets are not supported, also keep in mind the name of the component must match the Iconify id. Only the 200,000+ icons on Iconify are available. 
    - Icons can be either used directly in a Figma component or passed via an Instance Swap property. (expand/add example) 
      - Instance Swap Example: A button component with an Instance Swap property with the name icon, when you use that (trash, close, etc.) button component, you can choose the icon you want to use to go with it. 
    - Note: maybe add article about quirks of icons like hovering over icon? 

# Syncing (file system/real time sync)
  - Syncing symbol at the bottom right of the plugin. 
  - Two different ways to sync your Figma design with your code.
    1. Can sync in real time to your filesystem. The React Native components, assets, and Unistyles theme. 
       - This is HIGHLY recommended if you are starting with a new project, or working with React Native. 
    2. Integrating with your AI agent, using the MCP server. 
       - This method can work with existing projects that use a variety of tech stacks and libraries. 
       - The server will detect available technologies and adapt to fit that code. 
       - *add example here* 
  - Either method will require a paid account and to install the desktop sync tool.
  - Once you have created a pro account, you can create a project which will give you a Project Key. 
  - Copy the project key and click the sync button in the Figma plugin in the bottom right. 
  - You can paste in the key and save it. This will link this Figma design to your project. 
  - Syncing should start when you add the key, you should see a Figma design file name and how many components have been converted in your dashboard.   
  - To sync with a filesystem, either click the sync button in the plugin and then copy link and visit in your dashboard. Or click the sync name in the dashboard.
    - This link can be shared with multiple people, anyone with the link can sync those changes from your project. 
      > Be mindful when sharing this link, anyone with it will have access to the read only code. 
    - When visiting the link, if you have the sync tool installed, you will be prompted to select the folder where you want to install.IF not, click download and install the tool, then click retry.  
  - As long as the plugin is still syncing and the sync tool is still connected, the changes made in Figma will update in your filesystem in real time.
      > For best results, choose to sync to the design package in the EXO Template.
      > If tracking with Git, you can see changes in the diff.  
      > It is best to start with no working changes on a branch, so you are able to discard. 


# MCP
  - For MCP, go to the dashboard and click the MCP button on the right for the project you wish to integrate with.  
  - Follow the instructions for your IDE, follow the config instructions and choose your IDE for installation steps.  
    > It is recommended in both VS Code and Cursor to use workspace scoped configs. (add things for those specific IDEs) 
  - The sync tool is required to be installed and ran at least once before using MCP. 
  - Multiple people can use the same MCP config as long as they have sync tool installed. 
  - If you need to revoke access, you can reset your MCP key in the website dashboard. You can also reset the project key to revoke write access, but you will need to update Figma with your new key. 
     - This is useful when removing someone from your Figma design, in such case, rotating the keys is recommended. 
  - Overview of MCP: the MCP works by converting the React native code as normal, however, it analyzes your codebase and uses the React Native code as a reference to adapt to the technologies you are using. 
  - Example Prompt: 
    - Integrate all Figma design components in the project and create a showcase page. 
    - Integrate the Figma Avatar component into the codebase.
    - Update the Tailwind config using the Figma design theme.  


# Troubleshooting 
    ## Layout Issues 
      - If you see discrepancies in the layout of your components, check the following:
      - Ensure you are using auto layout for all frames.
      - Do not use Groups or Rectangles as they cannot use auto layout.
      - If component needs to fill the width or height, make sure to wrap it in a frame with fixed dimensions. 
      - Only change styles of variants, do not change the layer tree. All variants must have the same layers.
      - Grid layouts are not yet supported. 
      - To Absolute position a component instance or icon, wrap it in a Frame and apply it to that frame. 
      - DO NOT use Frames as a background for a component, apply a background color to the component's fill property. 

    ## Font Issues 
      - Custom fonts are not supported in the preview, but will generated code should work in your app if that font is installed properly. 
      - It is recommended to use Variable fonts for the best font weight accuracy. 
      - Font Strokes are not supported. 

    ## Varient Issues   
      - Make sure there are no comflicting variants in a component set that share the exact name. Varient values must be unique combinations. 
      - Only change styles between variants, do not remove layers. All variants MUST have the same layers and structure. 
      - Do not overload component sets, prefer creating another component (you should NOT have 50 fucking variants) 
      - Do not make dark and light mode variants, use the fucking theme system god cavitt blessed us with. 
      - The max of 2 variant properties are supported on a component. 
      - The 'state' variant property is special and is used for handling press events, it should always be the last varient property. 
        - Valide values for the state variant prop are:'Default', 'Hovered', 'Pressed', 'Focused', and 'Disabled'. 
    
    ## Other Style Issues 
      - If you encounter an issue with the component preview in the plugin not matching the Figma design, please provide a minimal reproducible Figma file and contact us on Discord. So we can fix the issue in a timely manner 😸

    ## Sync and MCP Issues 
      - If you encounter a problem with the desktop sync tool, MCP server, subscriptions, or website dashboard, please contact us on Discord for proirity support 😸

# Bug Notes
  1. Title Case Needed:
     - Variant properties lowercase values break, should always title case
```tsx 
        <HelloWorld testID="2:4832"
            greeting="dfgdfg"
            radius="rounded"
            state="Default"
            showIcon
        />
``` 
    - Radius value 'Rounded' needs to be capitalized 'R' 

  2. Support foreign component names 
      - Invalid characters are stripped out to _____

  3. Icons deletion
      - Icon page does not delete when deleting the whole icon set. 


# Other Notes
  - Node Toolbar
    - Move the Node toolbar into a separate section. 
    - Items under Node Toolbar: Motions, Properties, and Conditionals. 

  - Where to put Dev Tools (?) 
    - bidirectional 
    - inspecting nodes
    - Navigating between components
    - Diff tool again here 
    - intellisense in code editor

 - Animated Assets
 - Create Library, finish 'import EXO Kit', and templates. 
 - Documenting functions 
 - Configuring Locals and 
 - Create other app configs. 
 - Local State and Components 
 - Template strings 
 - Library components section (elaborate on each) 
    - sliders
    - checkboxes
    - Rive
    - Lottie
    - Charts 
    - Modals
    - Code 
    - Sheets 
    - Game
    - Books 
    - Maps 
    - PDF
    - Markdown 
    - Web views 


