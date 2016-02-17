

    this.resource("posts", function() {
                this.route("new");
                this.route("edit",{
                        path: ":post_id"
                });
        });
