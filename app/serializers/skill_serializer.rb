class SkillSerializer < ActiveModel::Serializer
  attributes :id, :skill_name

  has_many :employees
  has_many :subcontractors
end