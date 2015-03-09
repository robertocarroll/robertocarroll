require "stringex"
class Post < Thor
  desc "new", "create a new post"
  method_option :editor, :default => "subl"
  def new(*title)
    title = title.join(" ")
    date = Time.now.strftime('%Y-%m-%d')
    filename = "_posts/journal/#{date}-#{title.to_url}.md"

    if File.exist?(filename)
      abort("#{filename} already exists!")
    end

    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "author: roberto"
      post.puts "comments: false"
      post.puts "date: \"#{date}\""
      post.puts "layout: post"
      post.puts "slug: \"#{title.to_url}\""
      post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
      post.puts "categories:"
      post.puts "- Journal"
      post.puts "tags:"
      post.puts " -"
      post.puts "---"
    end

    system(options[:editor], filename)
  end
end