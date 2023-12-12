package com.cyrus.backend.Controller;


import com.cyrus.backend.Model.Link;
import com.cyrus.backend.Service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("link")
@CrossOrigin
public class LinkController {

    @Autowired
    private LinkService linkService;

    @PostMapping("/post")
    public ResponseEntity<String> post(@RequestBody Link link){
        linkService.saveLink(link);
        return ResponseEntity.ok("Link added");
    }

    @GetMapping("/get/{id}")
    public Optional<Link> getLink(@PathVariable("id") Integer id){
        return linkService.getLink(id);
    }

    @GetMapping("/get/all")
    public List<Link> getLinks(){
        return  linkService.getLinks();
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> putLink(@PathVariable("id") Integer id, Link link){
        linkService.putLink(id, link);
        return ResponseEntity.ok("Link updated");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteLink(@PathVariable("id") Integer id){
        linkService.deleteLink(id);
        return ResponseEntity.ok("Link deleted");
    }

}
