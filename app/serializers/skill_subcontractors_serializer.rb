class SkillSubcontractorsSerializer < ActiveModel::Serializer
  attributes :id, :skill_name, :company_legal_name, :company_dba, :primary_poc_name

  has_and_belongs_to_many :subcontractors
end
