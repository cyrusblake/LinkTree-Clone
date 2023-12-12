package com.cyrus.backend.Service;


import com.cyrus.backend.Model.Link;
import com.cyrus.backend.Repository.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LinkServiceImpl implements LinkService {

    @Autowired
    private LinkRepository linkRepository;

    @Override
    public Link saveLink(Link link) {
        Link newLink = new Link(
                link.getId(),
                link.getName(),
                link.getLink()
        );
        return linkRepository.save(newLink);
    }

    @Override
    public Optional<Link> getLink(Integer id) {
        return linkRepository.findById(id);
    }

    @Override
    public List<Link> getLinks() {
        return linkRepository.findAll();
    }

    @Override
    public void putLink(int id, Link link) {
        Optional<Link> optionalLink = linkRepository.findById(id);

        if(optionalLink.isPresent()){
            Link existingLink = optionalLink.get();
            existingLink.setName(link.getName());
            existingLink.setLink(link.getLink());
            linkRepository.save(existingLink);
        }
    }

    @Override
    public void deleteLink(int id) {
        linkRepository.deleteById(id);
    }
}
