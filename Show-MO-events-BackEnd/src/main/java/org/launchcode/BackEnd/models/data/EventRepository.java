package org.launchcode.BackEnd.models.data;

import org.launchcode.BackEnd.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer> {
}
