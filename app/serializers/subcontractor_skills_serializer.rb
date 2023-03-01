class SubcontractorSkillsSerializer < ActiveModel::Serializer
  attributes :id, :company_legal_name, :company_dba, :skill_name

  has_and_belongs_to_many :skills
end
