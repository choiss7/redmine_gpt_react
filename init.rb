Redmine::Plugin.register :redmine_gpt_react do
  name 'Redmine GPT Chatbot'
  author 'choipro'
  description 'Integrates a GPT-based chatbot into Redmine, offering users an interactive AI assistant within the platform. Built as a SPA for a seamless user experience.'
  version '1.0.0'
  url 'https://github.com/choiss7/redmine_gpt_react/'
  author_url 'https://github.com/choiss7/redmine_gpt_react/'

  settings default: {'openai_api_key' => '', 'gpt_model' => ''}, partial: 'settings/gpt_settings'
  
  permission :view_redmine_gpt_chatbot, { redmine_gpt_react: [:index] }, public: true
  menu :top_menu, :redmine_gpt_chatbot, { controller: 'redmine_gpt_react', action: 'index' }, caption: 'GPT Chatbot', if: Proc.new { User.current.logged? }
end
