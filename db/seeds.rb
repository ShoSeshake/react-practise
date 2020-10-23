# 10.times do |i|
#   User.create({nickname:"nickname#{i}", email:"mail#{i}@mail.com", password:"12345678", password_confirmation:"12345678"})
# end

10.times do |i|
  Tweet.create({title:"Title#{i}",text:"text#{i}",image:"https://d1f5hsy4d47upe.cloudfront.net/9e/9ec8ce5837281c7840ce115672b96e05_w.jpg", user_id:1})
end