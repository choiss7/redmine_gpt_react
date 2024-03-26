Redmine::Plugin.register :redmine_gpt_react do
  name 'Redmine GPT React plugin'
  author 'Your Name'
  description 'This is a Redmine plugin using Chat GPT API in SPA'
  version '0.0.1'
  url 'http://yourpluginurl.com'
  author_url 'http://yourauthorurl.com'

  permission :redmine_gpt_react, { redmine_gpt_react: [:index] }, public: true
  menu :top_menu, :redmine_gpt_react, { controller: 'redmine_gpt_react', action: 'index' }, caption: 'Chat GPT'
end

