package com.ssafy.special.domain.crew;


import com.ssafy.special.domain.food.Ingredient;
import com.ssafy.special.domain.member.Member;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@Entity(name = "crew")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Crew {
    // crew_seq, PK값
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "crew_seq")
    private Long crewSeq;

    //crew_name
    @NotNull
    @Column(name = "crew_name",length = 30) // 컬럼 정의를 설정
    private String crewName;

    //created_at
    @NotNull
    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    //last_modified_at
    @NotNull
    @UpdateTimestamp
    @Column(name = "last_modified_at")
    private LocalDateTime lastModifiedAt;

    // 자신이 속한 crew member list
    @OneToMany(mappedBy = "member")
    @Builder.Default
    private List<CrewMember> crewMembers = new ArrayList<>();

    @Builder
    public Crew(Long crewSeq, String crewName, LocalDateTime createdAt, LocalDateTime lastModifiedAt, List<CrewMember> crewMembers) {
        this.crewSeq = crewSeq;
        this.crewName = crewName;
        this.createdAt = createdAt;
        this.lastModifiedAt = lastModifiedAt;
        this.crewMembers = crewMembers;

    }
}
