# Changelog

All notable changes to `Mixpost Pro` will be documented in this file.

## 2.2.3 - 2024-08-19

**Fixes**

- Fixed post link publishing

## 2.2.2 - 2024-08-16

**Fixes**

- Fixed prefill post link by URL.

**Miscellaneous**

- Removed Unsplash doc link.

## 2.2.1 - 2024-08-01

**Fixes**

- Fixed oAuth LinkedIn scopes and disabled 'First comment' feature for 'Share on LinkedIn' product.

**Changes**

- Rename the button name from 'Add comment' to 'Add first comment'

## 2.2.0 - 2024-07-31

**New features**

- Thread for X
- First comment

**Fixes**

- Fixed longhand weekday translations for the `PickTime.vue` component
- Fixed Facebook post options
- Fixed Instagram post options

**Changes**

- Changed AI model from `gpt-3.5-turbo` to `gpt-4o-mini `
- Update translations
- Improved validation limit errors for media and character count.
- Improved editor media design.
- Improved errors for post-preview components.
- Improved TikTok options errors.
- Optimized Media crediting

**Internal Changes**

- Upgraded `nanoid` to `^5.0.7`
- AI TextGenerator & TextModifier fixed `character_limit`
- Changed `onUnmounted` to `onBeforeUnmount` for the `Editor.vue` component.
- Added `name` for SocialProvider
- Added `postConfigs` for SocialProvider

## 2.1.3 - 2024-06-07

**Fixes**

- Fixed post version for Facebook and Instagram
- Fixed html rendering post errors
- Fixed responsive for report metrics: Instagram, Mastodon, TikTok

**Changes**

- Updated translations

## 2.1.2 - 2024-06-03

**Fixes**

- Fixed localization for Send password reset link email.
- Fixed API PostFormRequest validation rules

**Changes**

- Forgot Password remove validation error about the user doesn't exist.
- Deprecated and removed from UI Facebook group.
- Added `v20` for Facebook API
- Update translations

**Miscellaneous**

- Support deleting user accounts for the Enterprise package.

## 2.1.1 - 2024-05-14

**Fixes**

- Fixed workspace relation for models owned by the workspace
- Fixed user relation for the `Post` model.

## 2.1.0 - 2024-05-10

**Fixes**

- Fixed post version options when creating a post from the media library

**Changes**

- Changed documentation URL

**Miscellaneous**

- Support s3 disk for X (Twitter)
- Instagram validates video for post type.
- Insert Unsplash photo crediting on post text
- Updated translations: ar-SA, es-ES, eu-ES
- Enhanced support for RTL layout

## 2.0.4 - 2024-05-03

**Fixes**

- Fixed account-deleted webhook
- Fixed post-deleted webhook
- Fixed API media resource

**Changes**

- Modified API response messages for `unauthenticated` and `forbidden` errors.
- Modified API response message for `workspace not found`.
- Enhanced API response to include JSON support.

**Miscellaneous**

- Expanded compatibility of the post keyword filter with additional database versions.

## 2.0.3 - 2024-04-12

**Fixes**

- Fixed loading media files in the calendar

**Miscellaneous**

- Added support upload `video/x-m4v` video mime type
- Optimized post-content body

## 2.0.2 - 2024-04-05

**Fixes**

- Fixed post-version options when empty

**Miscellaneous**

- Removed Facebook deprecated`page_engaged_users` metric

## 2.0.1 - 2024-04-02

**Fixes**

- Fixed migration's timestamp
- Fixed workspace Twitter service URL
- Fixed API store post endpoint

## 2.0.0 - 2024-04-01

**New Features**

- AI Assist
- Webhooks
- API
- Preview link of post
- Protect secured routes with password confirmation

**Changes**

- Service support status "Active/Inactive"
- Improved design and layout
- Added `Horizon` in admin sidebar
- Implemented new TikTok UI requirements
- Optimized schedule commands
- Optimized query post media

## 1.4.5 - 2024-02-23

- Fixed LinkedIn refresh token
- Fixed pasting empty lines to the editor
- Fixed Mastodon post count of text characters
- Fixed Instagram text preview

## 1.4.4 - 2024-01-30

- Added support for FB v19.0 (Temporary disabled groups)
- Optimized LinkedIn uploading media
- Optimized YouTube uploading video
- Removed unnecessary YouTube scopes
- Resize the YouTube icon on the confirmed popup
- Updated translations
- Fixed video thumbnail for shorter videos equal to 5s

## 1.4.3 - 2024-01-26

- Renamed Youtube to YouTube
- Increased the size of the YouTube icon and aligned the icons of other social platforms.
- Improved Terms & Privacy text
- Renamed Twitter to X (icon changed)
- Updated translations
- Fixed post editor placeholder

## 1.4.2 - 2024-01-22

- Updated translations: ca-ES,cs-CZ,de-DE,eu-ES,es-ES,es-MX,fr-FR,it-IT,ru-RU

## 1.4.1 - 2024-01-20

- Get the default locale for guest routes
- Added es-MX locale (translated with DeepL)
- Fixed sidebar trans key

## 1.4.0 - 2024-01-20

**Localization Support**

- Full Translated: ar-SA, fr-CA
- In Beta (Automatically translated with DeepL, in the revision process): ca-ES, cs-CZ, de-DE, es-ES, eu-ES, fr-FR, it-IT, ro-RO, ru-RU, sk-SK.

## 1.3.0 - 2023-12-02

- Added support for Instagram Stories
- Added support for Facebook Reels & Stories
- Added v18 to the Facebook form service
- Added Unsplash trigger download Job
- Added Unsplash credit attributes
- Truncate Pinterest error response
- Fixed vulnerability on download media
- Fixed media library item width
- Fixed video-player ratio aspect
- Fixed preview ratio aspect for TikTok video
- Fixed LinkedIn page refresh token
- Fixed generated page footer links

**Internal Changes**

- Added DevTools class
- Modified value of `external_media_terms` config
- Added `guzzlehttp/guzzle `to `composer.json`
- Added to AccountFactory `'authorized' => true`

## 1.2.1 - 2023-10-26

- Force the callback URL to use the native `mixpost` core path with the `FORCE_CORE_PATH_CALLBACK_TO_NATIVE` environment.
- Display the Enterprise version on the Status page (when Enterprise is installed)

**Internal Changes**

- Renamed package name in `README.md` file
- Added `HasFactory` to `PostVersion` model.
- Removed duplicate classes from `overrideFlatPickr.css`

## 1.2.0 - 2023-09-29

- Fix logo width on Generate Page Samples
- Fix TikTok privacy settings checked options by default
- Fix filter by tags for calendar
- Fix responsive for the Posting Times page
- Fix the active menu for the Services page
- User menu fix max-height
- Media Stock & GIFs - display configuration buttons only for the admin
- Change documentation link for social platform services

### Under the Hood (Internal Changes)

- Fix WorkspaceArtisanJob `uniqueFor`
- User menu fix for Enterprise package only
- Prefix routes with `corePath` function
- Support internal error reporting
- Support custom `UserResource`
- Add `isAdminConsole` helper function
- Rename `getWorkspaceClass` to `getWorkspaceModelClass`
- Support for inserting scripts inside of `<head>` and `<body>`

## 1.1.1 - 2023-09-27

- Fix the LinkedIn page image
- Fix LinkedIn function "tokenIsAboutToExpire"
- Dispatch UploadingMediaFile event on download external image

## 1.1.0 - 2023-09-25

- Fix editor line spaces
- Fix the Pinterest account name when the business name is empty
- Fix unknown timezone on installation
- Fix Flex.vue component (CSS)
- Fix the success button (CSS)
- Fix Instagram reports tests
- Fix users & workspaces page on deleting records (Admin console)
- Fix Switch.vue component
- Fix button components icon margins
- Fix responsive PageHeader.vue vue component
- Fix Minimal layout component
- Fix media usage conversions calculation
- Fix user delete message
- Page generator (prefill logo from config, support register URL)
- Remove Admin middleware to create the mastodon app route
- Preloader component supports rounded props
- Optimize notifications, convert Laravel errors to a string
- Optimize Error page
- Optimize rendering charts
- WorkspaceManager.php supports custom workspace model class
- Add identifier method for Social Provider
- Add & Dispatch AddingAccount event
- Add & Dispatch SchedulingPost event
- Add & Dispatch StoringAccountEntities
- Add & Dispatch UploadingMediaFile
- Support custom global middlewares for mixpost routes.
- Support custom workspace middlewares for mixpost workspace routes.
- Support custom workspace query for Schedule (Enterprise)
- Support favicon for Home device screen
- Add Web app manifests (PWA)
- LinkedIn supports OpenID Connect
- Automatically refresh the token of connection social accounts
- System status fix timezone of getLastScheduleRun function
- Ziggy filter only mixpost routes
- User menu - display workspace URLs only to users with an admin role (Enterprise)
- Posts - Add author name of post

## 1.0.0 - 2023-08-15

- Pages (Privacy policy, Terms...etc)
- Customization (Logo & Favicon)
- Forgot/Reset Password
- Two-Factor Authentication
- TikTok UI optimize
- Service forms optimized
- Clear cache on deleting the user
- Twitter analytics alert only to admin (closeable)
- Authorized account by db column
- Fix workspace user role access
- Fix "Add post from the calendar"
- Fix the command "clear-settings-cache"

## 0.10.4 - 2023-08-03

- Calendar Month: Fix timezone with (-)
- Calendar Month: Get posts for prev&next month

## 0.10.3 - 2023-07-25

- Fix getting the Instagram profiles on OAuth
- Add a "no result" message to the entity page

## 0.10.2 - 2023-07-24

- Add Instagram the number of comments to the analytics page
- Remove `pages_read_engagement` Facebook scope

## 0.10.1 - 2023-07-24

- Add `pages_show_list` for fb v17.0

## 0.10.0 - 2023-07-24

- Optimize Meta (Facebook) scopes
- Set unauthorized for the account during social server request
- UserMenu compatible with the Enterprise package
- Alert about compatibility with the Enterprise package
- Delete the workspace resources when it is deleted.

## 0.9.1 - 2023-07-13

- Fix timezone validation on the first installation

## 0.9.0 - 2023-07-12

- Add sensitive media support for Mastodon
- Set the user's timezone on installation
- Rename installation controller test
- Add footer to HorizontalGroup component

## 0.8.4 - 2023-07-06

- Optimize tests
- Fix Instagram & Pinterest rateLimitAboutToBeExceeded
- Replace auth() with getAuthGuard()

## 0.8.3 - 2023-06-29

- Fix missing day value of audience report

## 0.8.2 - 2023-06-28

Fix: LinkedIn post multiple images

## 0.8.1 - 2023-06-23

- Fix services for Mastodon

## 0.8.0 - 2023-06-23

- Linkedin Page support
- TikTok Direct Post support
- Admin sidebar restyle
- Admin Users page improve
- Admin Workspaces page improve
- Add Confirmation plugin
- Add Sidebar admin logo link
- Set primary color instead indigo
- Enterprise URL
- Button Support Icon
- Install command renamed `mixpost pro team` to `mixpost ` only

## 0.7.1 - 2023-06-06

- Fix debug mode status color
- Fix account update media
- Put jobs in the social provider folder
- `register` route was renamed to `installation`
- Add business console

## 0.7.0 - 2023-05-31

- Support update profile information
- Support update password
- Style update user preferences
- Save the user's active workspace
- Highlight the tagged user in the editor & preview
- Fix style

## 0.6.3 - 2023-05-29

- Support Facebook API v.17 (added "business_management" scope)
- Fix the handle error on the callback page
- Refresh Pinterest access token when it expires

## 0.6.2 - 2023-05-25

- Remove the v prefixes in status info
- Instagram & Fb Groups increased limit
- Fix account long name
- Fix exception handler
- User Menu Stylish

## 0.6.1 - 2023-05-24

- Fix Instagram Reports
- Fix post limits validation
- Fix calendar posts order

## 0.6.0 - 2023-05-23

- Fix hashtag group edit
- Fix Exception Errors
- Separate timezone from Laravel timezone
- Twitter Fix - Handle 403 Error
- Status page - Remove v prefixes
- Support account suffix - Get city location for FB page by default.
- Account entities - Show connected items
- Post content - Fix entity decode

## 0.5.1 - 2023-05-19

Version prefix migrated. Example: v0.5.1 to 0.5.1

## v0.5.0 - 2023-05-19

- Prefix Facades
- Horizon requires ^5.0 in composer.json
- Create `php artisan mixpost:create-admin` command
- Improve `php artisan mixpost:install` command

## v0.4.0 - 2023-05-18

- TikTok API Migrated
- Twitter API Refactory
- Social Providers' Rate-Limit optimized
- Removed "ext-redis" from composer.json

## v0.3.0 - 2023-05-12

- Fix Facebook group audience
- Fix "Update account"
- Improve the error page
- Prefill the Body, Title & URL from the address bar of the browser

## v0.2.1 - 2023-05-02

- Fix System Status body clipboard
- Fix Create Post from Calendar
- Update Readme

## v0.2.0 - 2023-05-02

- System Status
- System Logs
- Added doc link to service forms
- Fix Mastodon Reports

## v0.1.0-alpha - 2023-04-30

**Features:**

- Queue
- Workspaces
- Media Library
- Variables
- Hashtag groups
- Post Templates
- Post versions
- Calendar

**Social Providers:**

- Instagram
- Facebook Page
- Facebook Group
- TikTok
- LinkedIn Profile
- Pinterest
- Youtube
- Mastodon
- Twitter
