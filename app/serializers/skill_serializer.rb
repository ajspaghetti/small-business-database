class SkillSerializer < ActiveModel::Serializer
  attributes :id, :skill_name

  has_and_belongs_to_many :employees
  has_and_belongs_to_many :subcontractors
end