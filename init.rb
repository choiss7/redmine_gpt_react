Redmine::Plugin.register :redmine_gpt_react do
  name 'Redmine GPT Chatbot'
  author 'choipro'
  description 'Integrates a GPT-based chatbot into Redmine, offering users an interactive AI assistant within the platform. Built as a SPA for a seamless user experience.'
  version '1.0.0'
  url 'https://github.com/choiss7/redmine_gpt_react/'
  author_url 'https://github.com/choiss7/redmine_gpt_react/'

  settings default: {'openai_api_key' => '', 'gpt_model' => ''}, partial: 'settings/gpt_settings'
  
  permission :view_redmine_gpt_chatbot, { redmine_gpt_react: [:index] }, public: true

  menu :project_menu, :gpt_react, { controller: 'redmine_gpt_react', action: 'index' }, caption: 'GPT-React', after: :activity, param: :project_id


    project_module :gpt_react do
    permission :view_gpt, { gpt_react: [:index] } # gpt 컨트롤러의 index 액션을 볼 수 있는 권한을 추가합니다.
    permission :use_gpt, { gpt_react: [:query] } # gpt 컨트롤러의 query 액션을 사용할 수 있는 권한을 추가합니다.
  end

  
end
