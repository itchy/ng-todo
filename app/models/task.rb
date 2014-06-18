class Task < ActiveRecord::Base
  def as_json(options={})
    options = {methods: :done}.merge options
    super(options)
  end

  def done
    self.state == 1
  end
  alias_method :done?, :done
end
