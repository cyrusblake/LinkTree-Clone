package com.cyrus.backend.Service;

import com.cyrus.backend.Model.Link;

import java.util.List;
import java.util.Optional;

public interface LinkService {

    public Link saveLink(Link link);

    public Optional<Link> getLink(Integer id);

    public List<Link> getLinks();

    public void putLink(int id, Link link);

    public void deleteLink(int id);


}
