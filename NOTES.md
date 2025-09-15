⚛ Documentation Notes for Figma to React Native ⚛
    > User help tips
    > Motion doc page is a great example of how he wants it done. 

# Designing 
- Overview:
  - Step-by-step guide for creating React Native components in Figma, covering everything from basic components with auto-layout and themes to advanced features like component properties, variants, and proper organization with naming conventions that map to the final code structure.
  - ✿ *** USE Auto layout (Shift A), All frames NEED auto layout or it will look bad ***
- Step by step for creating a 'Hello World' component: 
    1. Create a Frame (F) 
    2. Right click and create component (Control+Alt+K)  *we need to add window hotkeys too* 
            > ✿ You can also click 'Add component' button and 'Create new', Name it, click create 
    3. Hit 'T' (or T on keyboard) and hit inside component to start typing 'Hello World' 
    4. Go to the right side panel. Expand on: Simple explanation of the tools in auto layout and appearance. 
- Themes
    - Creating a Theme: 
      1. Choose a preset or custom color 
      2. Select Generate Theme
    - Then create your variables
- Once Theme has been created, return to 'Hello World' component to customize the following under the 'Library Tab': 
    - Fill of component, will be white by default, but by typing 'Background' you can select the color of your preference.
    - Text, can be selected by typing 'Foreground' 
    - You are now able to use light and dark modes because themes have been successfully set up. (These can be changed at the top, under Page)
- How to add a Border:
    1. Select component 
    2. Go to 'Stroke' and select a color 
    3. Type 'Border' under Library Tab to add a colored border 
- How to add an Icon: 
    - After you create your theme, you can browse icon sets under the Icon Tab
      1. Browse icon set button, 
      2. Select your set(s) 
      3. Click 'Import' 
    - Now you are able search at the top what icon you want and drag/drop it into your component. 
    > You are able to change the width of the icon. 
    > By default the instance of that icon component has the 'Foreground theme color' just like Text did. So when switching themes, you are able to have light/dark themes. 
    > Read here to dive more into the icon system! 

- Back to the 'Hello World' 
  - The plug in maps Figma component properties to React Native component properties. 
    - Example: 
       - 1. Select component -> 2. select properties at the right-hand top on panel -> 3. click the '+' -> 4. choose 'Text' -> 5. Name it -> 6. Set value = hello world -> 7. Create 
       - It is not used yet so: 1. Select text inside component, right beside text at the right top on the side -> 2. Click symbol and choose 'Greetings property' that you just
        created. 
    - Now instead of the text content being hard coded, it is passed as a property. This can be used for your Storybook, Doc Pages, and Preview. 

    - Creating a 'Boolean' property
        - 1. Located at the top right -> 2. Hit the '+' -> 3. Select 'Boolean'
        - Boolean name and value are just the defaults that will be displayed in Storybook, Doc Pages, Preview etc. 
        - Right now the properties are not used (You can tell by the !)
        - To use it: 1. Click on the Icon Layer in the 'Appearance' panel -> 2. Click the 3rd icon in that row -> 3. Click show icon properties 
        - You will notice the icon in the code is wrapped in a 'Conditional Render' (have a code example)
          - If you go back to the component props on the right and change the show icon default value to 'False', the icon will no longer show in the preview. BUT notice the code does NOT change. 

    - Creating a 'Home Screen' component:  
      - 1. Create a component -> 2. Go back to component list in the plugin -> 3.Drag the 'Hello World' component into the 'Home Screen' component 
      - Now we are using an instance of hello world, notice it imported the 'Hello World' component in the code and passed props to it. 
      - You can then select the component instance in the home screen component and configure its properties independently for this certain instance. (Located on the upper right side 
        panel)
      - You will see the code update once configured. 
      - You can nest as many instances as you like inside a component (i.e. Button inside a dialogue, inside a screen)

- Creating a 'Variant' Property: (Hello World)
    - 1. Select the Home Screen component -> 2. Go to props at the top -> 3. click the '+' -> 4. Choose 'Variant'-> 
      5. Rename 'Property 1' to 'Radius' and rename 'Value' to 'Square' -> 6. Click the 'add variant button' (at the bottom of the component on the middle screen) -> 
      7. After creating the 2nd variant, rename it's value to 'Rounded' -> 8. Set border radius for the 2nd variant -> 9. Go to the Home Screen component and go to the hello world 
         inside of it -> 10. We can now choose between rounded and square (located on the right side)

- Creating an 'Instance Swap' Property: (Hello World)
  - 1. Select the home screen component -> 2. Go to properties -> 3. Select instance swap (last one) -> 4. Set Name and Value = (Pick your hello world component) -> 5. Click create 
       property button -> 6. On the left side, select the previous hello world we used -> 7. Go to the top right panel and select the 2nd icon 'Apply instance swap property' -> 8. You will see the button we just created, select it. 
  - Notice the hello world component is no longer imported, it is now passed as a property. 
  - Now if we go to the component list, we can drag/drop the home screen to make an instance of it. (Unsure if should add this, kind of complex)
        - You can change what component is included in that slot (in the property button slot)

 /// stopped reviewing notes here /// 
 
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

    ## Variant Issues  
      - Make sure there are no conflicting variants in a component set that share the exact name. Variant values must be unique combinations. 
      - Only change styles between variants, do not remove layers. All variants MUST have the same layers and structure. 
      - Do not overload component sets, prefer creating another component (you should NOT have 50 fucking variants) 
      - Do not make dark and light mode variants, use the fucking theme system god Cavitt blessed us with. 
      - The max of 2 variant properties are supported on a component. 
      - The 'state' variant property is special and is used for handling press events, it should always be the last variant property. 
        - Valid values for the state variant prop are:'Default', 'Hovered', 'Pressed', 'Focused', and 'Disabled'. 
    
    ## Other Style Issues 
      - If you encounter an issue with the component preview in the plugin not matching the Figma design, please provide a minimal reproducible Figma file and contact us on Discord. So we can fix the issue in a timely manner 😸

    ## Sync and MCP Issues 
      - If you encounter a problem with the desktop sync tool, MCP server, subscriptions, or website dashboard, please contact us on Discord for priority support 😸

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


