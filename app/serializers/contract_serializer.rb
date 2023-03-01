class ContractSerializer < ActiveModel::Serializer
  attributes :id, :contract_title, :contract_value, :contract_notes, :project_id, :client_company_id, :client_id, :employee_id, :subcontractor_id, :user_id, :user

  belongs_to :project
  belongs_to :client_company
  belongs_to :client
  belongs_to :employee
  belongs_to :user
  belongs_to :subcontractor
end
